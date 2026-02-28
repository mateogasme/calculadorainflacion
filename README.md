<div align="center">
  <h1>🇦🇷 Historical Argentina Inflation Calculator</h1>
  
  <p>
    <strong>A technical, precise, and visually premium tool designed to calculate and analyze accumulated inflation and salary evolution in Argentina (1950 - Present).</strong>
  </p>

  <p>
    <a href="https://calculadorainflacion.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/Website-Live_Demo-000000?style=for-the-badge&logo=vercel" alt="Website Live Demo" />
    </a>
    <img src="https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/ECharts-E43961?style=for-the-badge&logo=apache-echarts&logoColor=white" alt="ECharts" />
    <img src="https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen?style=for-the-badge&logo=googlechrome" alt="Lighthouse Score" />
  </p>
</div>

---

## 📌 About the Project

This **Inflation Calculator** was born from the need for a free-access statistical tool that doesn't underestimate Argentine economic complexity. Unlike global or linear inflation calculators, our engine processes **over 70 years of historical monthly data**, merging information from different organizations (official and independent) and accounting for the **13 nominal zeros** removed from the currency through various historical currency changes.

The project is open source and built with a focus on **mathematical precision**, **extreme performance (Lighthouse 100)**, and a **visual aesthetic inspired by the Vercel/Geist Design System**.

## ✨ Key Features

### 1. 📈 Inflation Calculator (1950 - Present)
* **Month-to-Month Algorithm:** Forget about smoothed annual averages. We calculate the loss of purchasing power or adjusted cost month by month.
* **Automatic Currency Conversion:** The engine transparently recognizes and interacts with different currencies (Peso Ley, Peso Argentino, Austral, Peso Convertible).

### 2. 💼 Salary Increase vs. Inflation Analysis
* Allows users to contrast, between two dates, their **nominal salary increase** against the **exact inflation figure for the same period**, determining whether they *gained*, *broke even*, or *lost* purchasing power in real terms.

### 3. 📊 Advanced Dynamic Visualization
* Interactive timeline charts powered by `Apache ECharts`.
* **Logarithmic Scale Support:** Crucial for correctly representing the brutal periods of **Hyperinflation (1989-1990)** without breaking the visual scale for stable years.

### 4. ⚡ Architecture and Performance
* Native **Astro** and **Tailwind CSS v4** components.
* Native *Dark Mode* support and optimized typography (`@fontsource-variable/onest`).

## 🧠 Data Engine and Statistical Methodology

The core of the project is based on purist research to achieve long-term analytical rigor. The data merges three main primary sources:

1. **Modern Era (1992 - Present):** Data extracted from the *General IPC Level - INDEC*.
2. **BPP / MIT (2007 - 2015):** To fix the official manipulation of the 2007-2015 period, data is replaced with the audited index from **MIT** (Massachusetts Institute of Technology - The Billion Prices Project), restoring real precision.
3. **Historical Period / OJF (1943 - 1991):** Historical series from *Orlando J. Ferreres* and the *Central Bank* are used to cover the full development of the second half of the 20th century.

> [!NOTE]  
> You can learn more about the calculation formulas and monetary chronology by visiting the [Methodology page on the Official Website](https://calculadorainflacion.vercel.app/metodologia).

## 🛠️ Tech Stack

- **[Astro (v5)](https://astro.build/):** Super fast web framework (Multi-Page Application) by default, shipping no unnecessary JavaScript to the client.
- **[Tailwind CSS (v4)](https://tailwindcss.com/):** Next-generation utility-first styling engine including `tailwind-animations`.
- **[ECharts 6](https://echarts.apache.org/):** Declarative enterprise library for rendering time-series charts.
- **Vercel Edge Network:** Hosting infrastructure with aggressive custom static cache management (`vercel.json`).

## 🚀 Installation and Local Development

If you wish to run the application or audit the engine locally:

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ 
- (Optional) Package manager like `npm`, `pnpm`, or `yarn`

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mateogasme/landing.git
   cd landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development environment:**
   ```bash
   npm run dev
   ```
   > A local server will open (defaulting to `http://localhost:4321/`).

4. **Compile for production (Build):**
   ```bash
   npm run build
   # To test the generated build:
   npm run preview
   ```

## 📂 Project Structure

```text
/
├── public/                 # Favicons, static assets, etc.
├── scripts/                # Utility scripts (e.g., parse_ipc.py)
├── src/
│   ├── assets/icons/       # SVG Icons
│   ├── components/         # Reusable UI components (Tooltip, Modal)
│   ├── data/               # Databases and static JSON (inflation.json)
│   ├── layouts/            # Global templates (Layout.astro)
│   ├── pages/              # Endpoints/routes (index, methodology, salary)
│   ├── sections/           # Main UI sections (Hero, Calculator, Headers)
│   └── styles/             # Global CSS variables and base utilities
├── package.json            # Dependencies
├── astro.config.mjs        # Astro configuration
└── tailwind.config.mjs     # Tailwind CSS configuration
```

## 🤝 Collaboration and Contributions

Pull requests and suggestions are always welcome. If you find an error, historical anomaly in the data, or want to expand features:

1. *Fork* the project.
2. Create a branch for your new feature (`git checkout -b feature/NewIdea`).
3. Commit your changes (`git commit -m 'Add NewIdea'`).
4. Push the branch (`git push origin feature/NewIdea`).
5. Open a *Pull Request*.

## 📄 License

This project is released under the **MIT License**.

You can freely use the code, fork it, or use our static data structure `inflation.json` as long as you provide proper attribution to the original project.

---
**Developed with ❤️ to better understand Argentina's economic history.**
