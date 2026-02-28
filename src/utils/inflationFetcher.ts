export const fetchInflationData = async () => {
    // Dynamically import static fallback
    const { default: staticData } = await import("../data/inflation.json");

    // Create a shallow copy so we can cleanly mutate frontend cache if needed
    const data = { ...staticData } as Record<string, { pureIndex: number; adjustedIndex: number }>;

    try {
        const response = await fetch("https://apis.datos.gob.ar/series/api/series?ids=145.3_INGNACNAL_DICI_M_15&format=json");
        if (response.ok) {
            const apiData = await response.json();

            // Base value is Dec 2016 which is 100 in the INDEC index
            const baseValue = data["2016-12"].pureIndex;

            if (apiData && apiData.data && Array.isArray(apiData.data)) {
                apiData.data.forEach((row: [string, number]) => {
                    const dateStr = row[0]; // e.g., "2017-01-01"
                    const value = row[1];

                    const dateParts = dateStr.split("-");
                    const year = parseInt(dateParts[0], 10);
                    const month = parseInt(dateParts[1], 10);
                    const key = `${year}-${month}`;

                    // Update existing projection or append new data
                    const calculatedPureIndex = (value / 100) * baseValue;
                    data[key] = {
                        pureIndex: calculatedPureIndex,
                        adjustedIndex: calculatedPureIndex // Multiplier to ARS is 1 from 1992 onwards
                    };
                });
            }
        }
    } catch (e) {
        console.error("No se pudo obtener la actualización en vivo de INDEC, usando datos respaldados.", e);
    }

    return data;
};
