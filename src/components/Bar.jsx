import React, { useEffect } from 'react';
import { Chart } from 'canvasjs'; // Use named import

const Bar = () => {
  useEffect(() => {
    const chart = new Chart("chartContainer3", {
      animationEnabled: true,
      theme: "light2",
      axisY: {
        title: "Weight in Kg",
      },
      data: [{
        type: "column",
        showInLegend: true,
        legendMarkerColor: "grey",
        legendText: "Avg weight",
        color: "#554cea",
        dataPoints: [
          { y: 1, label: "Rawas" },
          { y: 2, label: "Rohu" },
          { y: 2, label: "Catla" },
          { y: 2.5, label: "Hilsa" },
          { y: 1, label: "Sardin" },
        ],
      }],
    });
    chart.render();
  }, []);

  return (
    <div id="chartContainer3" style={{ height: '370px', width: '50%' }}></div>
  );
};

export default Bar;
