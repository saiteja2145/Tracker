import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const MonthlyWiseData = ({ dailyData }) => {
  const [monthlyData, setmonthlyData] = useState([]);
  useEffect(() => {
    let MONTHS = [
      { month: "January", confirmed: 0, dead: 0, recovered: 0 },
      { month: "February", confirmed: 0, dead: 0, recovered: 0 },
      { month: "March", confirmed: 0, dead: 0, recovered: 0 },
      { month: "April", confirmed: 0, dead: 0, recovered: 0 },
      { month: "May", confirmed: 0, dead: 0, recovered: 0 },
      { month: "June", confirmed: 0, dead: 0, recovered: 0 },
      { month: "July", confirmed: 0, dead: 0, recovered: 0 },
      { month: "August", confirmed: 0, dead: 0, recovered: 0 },
      { month: "September", confirmed: 0, dead: 0, recovered: 0 },
      { month: "October", confirmed: 0, dead: 0, recovered: 0 },
      { month: "November", confirmed: 0, dead: 0, recovered: 0 },
      { month: "December", confirmed: 0, dead: 0, recovered: 0 },
    ];
    dailyData.forEach((data) => {
      for (let i = 0; i < MONTHS.length; i++) {
        if (data.date.includes(MONTHS[i].month)) {
          MONTHS[i].confirmed += +data.dailyconfirmed;
          MONTHS[i].dead += +data.dailydeceased;
          MONTHS[i].recovered += +data.dailyrecovered;
          break;
        }
      }
    });
    MONTHS = MONTHS.filter((month) => month.confirmed > 0);
    setmonthlyData(MONTHS);
  }, []);

  return (
    <div>
      <h2 className="heading--secondary textCenter">Monthly Data</h2>
      <Bar
        data={{
          labels: monthlyData.map((data) => data.month),
          datasets: [
            {
              label: "Confirmed",
              backgroundColor: "rgba(235, 59, 90,.7)",
              data: monthlyData.map((data) => data.confirmed),
            },
            {
              type: "line",
              label: "Confirmed",
              backgroundColor: "#fd9644",
              borderColor: "#fd9644",
              data: monthlyData.map((data) => data.confirmed),
              fill: false,
            },
            {
              label: "Dead",
              backgroundColor: "rgba(56, 103, 214,.7)",
              data: monthlyData.map((data) => data.dead),
            },
            {
              type: "line",
              label: "Dead",
              backgroundColor: "#a55eea",
              borderColor: "#a55eea",
              data: monthlyData.map((data) => data.dead),
              fill: false,
            },
            {
              label: "Recovered",
              backgroundColor: "rgba(43, 203, 186,.7)",
              data: monthlyData.map((data) => data.recovered),
            },
            {
              type: "line",
              label: "Recovered",
              backgroundColor: "#20bf6b",
              borderColor: "#20bf6b",
              data: monthlyData.map((data) => data.recovered),
              fill: false,
            },
          ],
        }}
        options={{
          legend: { display: false },
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default MonthlyWiseData;
