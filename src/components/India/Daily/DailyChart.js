import React, { useState } from "react";
import { Line, Chart } from "react-chartjs-2";
import "./DailyChart.css";
const DailyChart = ({ dailyData }) => {
  const [switchDailyData, setSwitchDailyData] = useState("dailyData");
  Chart.defaults.global.animation.duration = 2000;

  return (
    <div>
      <div className="chartHeading">
        <h2 className="heading--secondary chartHead">Daily Current Data</h2>
        <ul className="switchContainer">
          <li
            className={`dailyChart ${
              switchDailyData === "dailyData" ? "active" : ""
            }`}
            name="dailyData"
            onClick={() => setSwitchDailyData("dailyData")}
          >
            Daily Data
          </li>
          <li
            className={`dailyChart ${
              switchDailyData === "totalDailyData" ? "active" : ""
            }`}
            name="totalDailyData"
            onClick={() => setSwitchDailyData("totalDailyData")}
          >
            Total Data
          </li>
        </ul>
      </div>
      <Line
        data={{
          labels: dailyData.map((daily) => daily.date),
          datasets: [
            {
              data: dailyData.map((daily) =>
                switchDailyData === "dailyData"
                  ? daily.dailyconfirmed
                  : daily.totalconfirmed
              ),
              label:
                switchDailyData === "dailyData"
                  ? "Today Confirmed"
                  : "Total Confirmed",
              borderColor: "#1B9CFC",
              fill: true,
            },
            {
              data: dailyData.map((daily) =>
                switchDailyData === "dailyData"
                  ? daily.dailyrecovered
                  : daily.totalrecovered
              ),
              label:
                switchDailyData === "dailyData"
                  ? "Today Recovered"
                  : "Total Recovered",
              borderColor: "#B33771",
              fill: true,
            },
            {
              data: dailyData.map((daily) =>
                switchDailyData === "dailyData"
                  ? daily.dailydeceased
                  : daily.totaldeceased
              ),
              label:
                switchDailyData === "dailyData" ? "Today Dead" : "Total Dead",
              borderColor: "#55E6C1",
              fill: true,
            },
          ],
        }}
        options={{
          legend: { display: false },
        }}
      ></Line>
    </div>
  );
};

export default DailyChart;
