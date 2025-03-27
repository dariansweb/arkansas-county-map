# Arkansas County Boundary GeoJSON

This repository contains a simplified **GeoJSON** representation of all **75 county boundaries in the state of Arkansas**, derived from official shapefile data provided by the [Arkansas GIS Office](https://gis.arkansas.gov).

## 📦 File Contents

- `COUNTY_BOUNDARY.json`  
  A GeoJSON file containing all county polygons for Arkansas, usable in web mapping libraries such as **D3.js**, **Leaflet**, **Mapbox GL JS**, or any modern GIS platform that supports GeoJSON.

## 🧭 Data Sources

### County Boundaries

The county boundaries were sourced from the Arkansas GIS Office:

> **County Boundary (Polygons)**  
> [https://gis.arkansas.gov/product/county-boundary-polygons/](https://gis.arkansas.gov/product/county-boundary-polygons/)

This dataset represents the contemporary boundary of each county as established or altered by various Acts of the Arkansas Legislature. :contentReference[oaicite:0]{index=0}

### Population Data

Population estimates for each county were obtained from the U.S. Census Bureau:

> **County Population Totals: 2020-2024**  
> [https://www.census.gov/data/tables/time-series/demo/popest/2020s-counties-total.html](https://www.census.gov/data/tables/time-series/demo/popest/2020s-counties-total.html)

This page features files containing county population totals and components of change for years 2020 to 2024. :contentReference[oaicite:1]{index=1}

## 🎯 Use Cases

This data is ideal for:

- Creating **interactive heat maps**
- Building dashboards in **D3.js** or **Leaflet**
- Mapping **case management**, **service coverage**, or **demographic data**
- Educational projects and public visualizations

## 🌐 Example (with D3.js)

```js
// Example code to load and visualize the GeoJSON data with D3.js
