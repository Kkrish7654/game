// import React, { useState, useRef } from "react";
// import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import { Pie } from "react-chartjs-2";
// import "../App.css";

// Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// const Wheel: React.FC = () => {
//   const [finalValue, setFinalValue] = useState("Click On The Spin Button To Start");
//   const [spinning, setSpinning] = useState(false);
//   const chartRef = useRef<any>(null);

//   const data = [16, 16, 16, 16, 16, 16]; // Six equal slices
//   const pieColors = ["#8b35bc", "#b163da", "#8b35bc", "#b163da", "#8b35bc", "#b163da"];
  
//   // Define ranges of angles for each segment
//   const rotationValues = [
//     { minDegree: 0, maxDegree: 60, value: 1 }, // First segment
//     { minDegree: 61, maxDegree: 120, value: 2 }, // Second segment
//     { minDegree: 121, maxDegree: 180, value: 3 }, // Third segment
//     { minDegree: 181, maxDegree: 240, value: 4 }, // Fourth segment
//     { minDegree: 241, maxDegree: 300, value: 5 }, // Fifth segment
//     { minDegree: 301, maxDegree: 360, value: 6 }, // Sixth segment
//   ];

//   const valueGenerator = (angleValue: number) => {
//     // Align the angle with the segments and return the value
//     for (let i of rotationValues) {
//       if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
//         setFinalValue(`Value: ${i.value}`);
//         setSpinning(false);
//         break;
//       }
//     }
//   };

//   const spinWheel = () => {
//     setSpinning(true);
//     setFinalValue("Good Luck!");
//     let randomDegree = Math.floor(Math.random() * 360); // Choose a random degree
//     let currentDegree = 0;
//     let rotationValue = 20; // Initial high speed
//     let deceleration = 0.05; // Rate of deceleration

//     const rotationInterval = setInterval(() => {
//       if (chartRef.current) {
//         currentDegree += rotationValue;
//         chartRef.current.options.rotation = currentDegree % 360;
//         chartRef.current.update();

//         // Decelerate
//         if (rotationValue > 0) {
//           rotationValue -= deceleration;
//         }

//         // If rotationValue falls below 0, stop and get final value
//         if (rotationValue <= 0) {
//           clearInterval(rotationInterval);
//           const finalAngle = (360 - (currentDegree % 360)) % 360;
//           valueGenerator(finalAngle); // Pass the final angle to get the value
//         }
//       }
//     }, 20);
//   };

//   const chartData = {
//     labels: [1, 2, 3, 4, 5, 6], // Labels for each slice
//     datasets: [
//       {
//         backgroundColor: pieColors,
//         data: data,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     rotation: 0,
//     animation: {
//       duration: 0,
//     },
//     plugins: {
//       datalabels: {
//         color: "#ffffff",
//         formatter: (value: any, context: any) => context.chart.data.labels[context.dataIndex],
//         font: {
//           size: 24,
//         },
//       },
//       tooltip: false,
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return (
//     <div className="container">
//       <div className="wheel-container">
//         <Pie data={chartData} options={chartOptions} ref={chartRef} />
//         {/* Needle */}
//         <img
//           src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-up-arrow-icon-png-image_956434.jpg"
//           alt="spinner arrow"
//           className="spinner-arrow"
//         />
//       </div>
//       <button id="spin-btn" disabled={spinning} onClick={spinWheel}>
//         Spin
//       </button>
//       <div id="final-value">
//         <p>{finalValue}</p>
//       </div>
//     </div>
//   );
// };

// export default Wheel;
