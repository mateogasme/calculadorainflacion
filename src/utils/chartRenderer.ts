export const renderInflationChart = async (
    chartContainer: HTMLElement,
    startYear: number,
    startMonth: number,
    endYear: number,
    endMonth: number,
    startIndexValue: number,
    endIndexValue: number,
    typedInflationData: Record<string, any>
) => {
    try {
        const echarts = await import("echarts/core");
        const { LineChart } = await import("echarts/charts");
        const { TooltipComponent, GridComponent } = await import("echarts/components");
        const { CanvasRenderer } = await import("echarts/renderers");
        const { GraphicComponent } = await import("echarts/components");

        echarts.use([LineChart, TooltipComponent, GridComponent, CanvasRenderer, GraphicComponent]);

        let myChart = echarts.getInstanceByDom(chartContainer);
        if (!myChart) {
            myChart = echarts.init(chartContainer);
        }

        let cy = startYear;
        let cm = startMonth;
        const xAxisData = [];
        const seriesData = [];

        // Si el año de final es menor que el inicial, evitamos loop infinito
        if (cy < endYear || (cy === endYear && cm <= endMonth)) {
            while (cy < endYear || (cy === endYear && cm <= endMonth)) {
                const k = `${cy}-${cm}`;
                xAxisData.push(`${cm}/${cy}`);
                if (typedInflationData[k]) {
                    seriesData.push(typedInflationData[k].adjustedIndex);
                } else {
                    const vals = Object.values(typedInflationData);
                    seriesData.push(vals[vals.length - 1].adjustedIndex);
                }
                cm++;
                if (cm > 12) {
                    cy++;
                    cm = 1;
                }
            }
        } else {
            // Invertido: causo caída lisa
            xAxisData.push(`${startMonth}/${startYear}`, `${endMonth}/${endYear}`);
            seriesData.push(startIndexValue, endIndexValue);
        }

        const isDark = document.documentElement.classList.contains("dark");
        const tooltipBg = isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.9)";
        const tooltipBorder = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
        const tooltipText = isDark ? "#fff" : "#000";

        const option = {
            tooltip: {
                trigger: "axis",
                backgroundColor: tooltipBg,
                borderColor: tooltipBorder,
                textStyle: {
                    color: tooltipText,
                    fontSize: 13,
                    fontFamily: "Onest Variable, sans-serif",
                },
                formatter: function (params: any) {
                    let label = params[0].name;
                    let value = new Intl.NumberFormat("es-AR", {
                        notation: "compact",
                        maximumFractionDigits: 1,
                    }).format(params[0].value);
                    return `<b>${label}</b><br/>Índice: ${value}`;
                },
            },
            grid: {
                top: 10,
                right: 0,
                bottom: 20,
                left: 0,
                containLabel: false,
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: xAxisData,
                show: false,
            },
            yAxis: {
                type: "log",
                show: false,
                min: "dataMin",
            },
            series: [{
                name: "Índice",
                type: "line",
                data: seriesData,
                smooth: 0.3,
                symbol: "none",
                lineStyle: { color: "#0070F3", width: 3 },
                itemStyle: { color: "#0070F3" },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "rgba(0, 112, 243, 0.4)" },
                        { offset: 1, color: "rgba(0, 112, 243, 0.0)" },
                    ])
                },
            }],
        };

        myChart.setOption(option);

        window.addEventListener("resize", () => {
            myChart?.resize();
        });
    } catch (e) {
        console.error("No se pudo cargar o inicializar el gráfico ECharts", e);
    }
};
