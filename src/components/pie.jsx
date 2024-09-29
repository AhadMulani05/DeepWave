import React, { useEffect } from 'react';
import { CanvasJSChart, CanvasJS } from 'canvasjs-react-charts';  // Import named exports

const Pie = () => {
  useEffect(() => {
    const PieChart = new CanvasJS.Chart("chartContainer2", {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "The Top Fish Producing Countries"
      },
      legend: {
        cursor: "pointer",
        itemclick: explodePie
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "{name}: <strong>{y}%</strong>",
        indexLabel: "{name} - {y} Metric tons",
        dataPoints: [
          { y: 58.8, name: "Bhopal" },
          { y: 48.3, name: "Hydrabad" },
          { y: 43.5, name: "Chennai" },
          { y: 48.2, name: "Ahmedabad" },
          { y: 43.5, name: "Pune" },
          { y: 16.5, name: "Mumbai" }
        ]
      }]
    });

    PieChart.render();

    function explodePie(e) {
      if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
      } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
      }
      PieChart.render();
    }
  }, []);

  return <div id="chartContainer2" style={{ height: "300px", width: "100%" }}></div>; // Adjusted height for better visibility
};

export default Pie;
