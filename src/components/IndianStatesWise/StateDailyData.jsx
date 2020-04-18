import React from "react";
import { Line } from "react-chartjs-2";

const StateDailyData = ({ stateDailyData, selectState }) => {
  return (
    <div>
      <Line
        data={{
          labels: stateDailyData[0].map((daily) => daily.date),
          datasets: [
            {
              data: stateDailyData[0].map((daily) => daily[selectState[1]]),
              label: "Confirmed",
              borderColor: "#1B9CFC",
              fill: true,
            },
            {
              data: stateDailyData[1].map((daily) => daily[selectState[1]]),
              label: "Recovered",
              borderColor: "#B33771",
              fill: true,
            },
            {
              data: stateDailyData[2].map((daily) => daily[selectState[1]]),
              label: "Dead",
              borderColor: "#55E6C1",
              fill: true,
            },
          ],
        }}
        options={{
          legend: { display: false },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
        width={500}
        height={300}
      ></Line>
    </div>
  );
};

export default StateDailyData;
