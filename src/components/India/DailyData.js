import React from "react";
import "./DailyData.css";
import DailyCards from "./Daily/DailyCards";
import MonthlyWiseData from "./Daily/MonthlyWiseData";

const DailyData = ({ dailyData }) => {
  return (
    <div className="dailyContainer">
      <DailyCards
        cardData={{
          ...dailyData.statewise[0],
          ...dailyData.cases_time_series[
            dailyData.cases_time_series.length - 1
          ],
        }}
      />
      <MonthlyWiseData dailyData={dailyData.cases_time_series} />
    </div>
  );
};

export default DailyData;
