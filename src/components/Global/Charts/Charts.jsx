import React, { useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../api/api";
import { useState } from "react";
import "./Chart.css";

const Charts = ({ country, currentTrends }) => {
  const [chartData, setChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  useEffect(() => {
    if (country) {
      if (currentTrends) {
        setBarChartData(currentTrends);
      }
    } else {
      const fetchData = async () => {
        const data = await fetchDailyData();
        setChartData(data);
      };
      fetchData();
    }
  }, [country, currentTrends]);

  const LineChart =
    chartData.length > 0 ? (
      <Line
        data={{
          labels: chartData.map((daily) => daily.reportDate),
          datasets: [
            {
              data: chartData.map((daily) => daily.confirmed.total),
              label: "Global Infected",
              borderColor: "#16a085",
              fill: true,
            },
            {
              data: chartData.map((daily) => daily.deaths.total),
              label: "Global Deaths",
              borderColor: "#2ecc71",
              fill: true,
            },
            {
              data: chartData.map((daily) => daily.confirmed.china),
              label: "China Infected",
              borderColor: "#e74c3c",
              fill: true,
            },
            {
              data: chartData.map((daily) => daily.deaths.china),
              label: "China Deaths",
              borderColor: "#9b59b6",
              fill: true,
            },
          ],
        }}
      ></Line>
    ) : null;

  const { confirmed, recovered, deaths } = barChartData;

  const BarChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Rcoverd", "Dead"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#16a085", "#2ecc71", "#e74c3c"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;
  return (
    <div className="chart--container">{country ? BarChart : LineChart}</div>
  );
};

export default Charts;
