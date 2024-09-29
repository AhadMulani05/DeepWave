import React, { useEffect } from "react";
import { CanvasJSChart, CanvasJS } from "canvasjs-react-charts";  // Import named exports

const Chart = () => {

  useEffect(() => {
    const chart = new CanvasJS.Chart("chartContainer1", {  // Access CanvasJS directly from the named import
      animationEnabled: true,
      title: {
        text: "Top 5 Cities by Fish Type",
      },
      axisY: {
        title: "Fish Quantity (in metric tons)",
        titleFontColor: "#4F81BC",
        lineColor: "#4F81BC",
        labelFontColor: "#4F81BC",
        tickColor: "#4F81BC",
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        itemclick: toggleDataSeries,
      },
      data: [
        {
          type: "column",
          name: "Tuna",
          color: "#3043e5",
          legendText: "Tuna",
          showInLegend: true,
          dataPoints: [
            { label: "Mumbai", y: 64 },
            { label: "Pune", y: 64 },
            { label: "Chennai", y: 40 },
            { label: "Goa", y: 48 },
            { label: "Kerala", y: 88 },
          ],
        },
        {
          type: "column",
          name: "Rohu",
          color: "#66e57f",
          legendText: "Rohu",
          showInLegend: true,
          dataPoints: [
            { label: "Mumbai", y: 32 },
            { label: "Pune", y: 50 },
            { label: "Chennai", y: 20 },
            { label: "Goa", y: 28 },
            { label: "Kerala", y: 56 },
          ],
        },
        {
          type: "column",
          name: "Catla",
          color: "#d2ea27",
          legendText: "Catla",
          showInLegend: true,
          dataPoints: [
            { label: "Mumbai", y: 81 },
            { label: "Pune", y: 70 },
            { label: "Chennai", y: 67 },
            { label: "Goa", y: 67 },
            { label: "Kerala", y: 76 },
          ],
        },
        {
          type: "column",
          name: "Hilsa",
          color: "#ed3c3c",
          legendText: "Hilsa",
          showInLegend: true,
          dataPoints: [
            { label: "Mumbai", y: 46 },
            { label: "Pune", y: 20 },
            { label: "Chennai", y: 30 },
            { label: "Goa", y: 47 },
            { label: "Kerala", y: 22 },
          ],
        },
        {
          type: "column",
          name: "Sardine",
          color: "#3cb7ed",
          legendText: "Sardine",
          showInLegend: true,
          dataPoints: [
            { label: "Mumbai", y: 30 },
            { label: "Pune", y: 90 },
            { label: "Chennai", y: 43 },
            { label: "Goa", y: 50 },
            { label: "Kerala", y: 58 },
          ],
        },
      ],
    });
    chart.render();

    function toggleDataSeries(e) {
      if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      chart.render();
    }
  }, []);

  return <div id="chartContainer1" style={{ height: "500px", width: "100%" }}></div>;
};

export default Chart;
