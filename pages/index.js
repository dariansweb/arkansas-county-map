import {html} from "https://cdn.jsdelivr.net/npm/@observablehq/stdlib@5/+esm";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export default async function() {
  const container = html`<div style="position: relative">
    <svg width="960" height="600" style="display: block; margin: auto; border: 1px solid #ccc;"></svg>
    <div id="tooltip" style="
      position: absolute;
      padding: 6px 10px;
      background: rgba(0, 0, 0, 0.75);
      color: #fff;
      border-radius: 4px;
      font-size: 13px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease;
    "></div>
  </div>`;

  const svg = d3.select(container.querySelector("svg"));
  const tooltip = d3.select(container.querySelector("#tooltip"));
  const width = +svg.attr("width");
  const height = +svg.attr("height");

  const countyData = {
    Pulaski: 88,
    Washington: 65,
    Benton: 73,
    Sebastian: 42,
    Faulkner: 55,
    Craighead: 61,
    Saline: 47,
    Garland: 39,
    White: 58,
    Jefferson: 23,
    // Add the rest...
  };

  const color = d3.scaleQuantize().domain([0, 100]).range(d3.schemeReds[5]);

  const projection = d3.geoMercator()
    .scale(3000)
    .center([-92.5, 34.8])
    .translate([width / 2, height / 2]);

  const path = d3.geoPath().projection(projection);

  const geojson = await d3.json("../data/arkansas-counties-fixed-geojson.json");

  svg.selectAll("path")
    .data(geojson.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", d => color(countyData[d.properties.COUNTY] || 0))
    .attr("stroke", "#fff")
    .attr("stroke-width", "0.5px")
    .on("mousemove", (event, d) => {
      const name = d.properties.COUNTY;
      const value = countyData[name] || 0;
      tooltip
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 20 + "px")
        .style("opacity", 1)
        .html(`<strong>${name}</strong><br/>Value: ${value}`);
    })
    .on("mouseout", () => {
      tooltip.style("opacity", 0);
    });

  return container;
}
