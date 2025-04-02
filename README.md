---

# Arkansas County Boundary GeoJSON

This repository contains a simplified **GeoJSON** representation of all **75 county boundaries in the state of Arkansas**, derived from official shapefile data provided by the [Arkansas GIS Office](https://gis.arkansas.gov).

> **🔗 Live Demo:**  
> 👉 [Juvenile Justice Dashboard (Hosted on GitHub Pages)](https://dariansweb.github.io/arkansas-county-map)

---
# 📜 The Codex of Functionality

> In the Year of the Debug, amidst the Trials of Modal Madness,  
> A Dev of Singular Will forged this Artifact.  

> It runs. It renders.  
> It bows to no linter.

### ✨ You want elegance?  
### Then fork it, **champ**. 😎

> _Thus spoke the Builder._

---
## 📦 File Contents

- `COUNTY_BOUNDARY.json`  
  A GeoJSON file containing all county polygons for Arkansas, usable in web mapping libraries such as **D3.js**, **Leaflet**, **Mapbox GL JS**, or any modern GIS platform that supports GeoJSON.

---

## 🧭 Data Sources

### County Boundaries

The county boundaries were sourced from the Arkansas GIS Office:

> **County Boundary (Polygons)**  
> [https://gis.arkansas.gov/product/county-boundary-polygons/](https://gis.arkansas.gov/product/county-boundary-polygons/)

This dataset represents the contemporary boundary of each county as established or altered by various Acts of the Arkansas Legislature.

---

### Population Data

Population estimates for each county were obtained from the U.S. Census Bureau:

> **County Population Totals: 2020–2024**  
> [https://www.census.gov/data/tables/time-series/demo/popest/2020s-counties-total.html](https://www.census.gov/data/tables/time-series/demo/popest/2020s-counties-total.html)

This page features files containing county population totals and components of change for years 2020 through 2024.

---

### Juvenile Commitment Data

The counts of juvenile commitments were obtained from the Arkansas Department of Human Services, Division of Youth Services. These reports provide detailed statistical data on youth services and commitments within the state.

> **Division of Youth Services Reports & Publications**  
> [https://humanservices.arkansas.gov/divisions-shared-services/youth-services/reports-publications/](https://humanservices.arkansas.gov/divisions-shared-services/youth-services/reports-publications/)

---

## 🎯 Use Cases

This data is ideal for:

- Creating **interactive heat maps**
- Building dashboards in **D3.js** or **Leaflet**
- Mapping **case management**, **service coverage**, or **demographic data**
- Educational projects and public visualizations

---

## 🌐 Example (with D3.js)

```js
// Example code to load and visualize the GeoJSON data with D3.js
d3.json("COUNTY_BOUNDARY.json").then((data) => {
  const projection = d3.geoAlbersUsa().fitSize([width, height], data);
  const path = d3.geoPath().projection(projection);

  svg.selectAll("path")
    .data(data.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", "#ccc");
});
```

---

## 📝 License

This project is licensed under the MIT License. That means you’re free to use, modify, distribute, and remix this project—even commercially—just include the original copyright notice.

> **MIT License**  
> Copyright © 2025 [Darian Sims](https://github.com/dariansweb)

See the full license text in [`LICENSE.txt`](LICENSE.txt).

---

## 🤝 Contributions

Feel free to fork, open issues, or suggest improvements! Whether you're fixing typos or building entire dashboards on top of this—pull requests are welcome.

---
