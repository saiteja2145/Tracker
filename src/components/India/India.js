import React, { useEffect, useState } from "react";
import axios from "axios";
import Logs from "./Logs";
import DailyData from "./DailyData";
import Spinner from "../Global/Spinner/Spinner";

const India = () => {
  const [logData, setLogData] = useState([]);
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    try {
      const fetchData = async () => {
        try {
          const [logsData, getDailyData] = await Promise.all([
            axios.get("https://api.covid19india.org/updatelog/log.json"),
            axios.get("https://api.covid19india.org/data.json"),
          ]);
          setLogData(logsData.data.reverse().slice(0, 8));
          setDailyData(getDailyData.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (logData.length === 0 || !dailyData.statewise) return <Spinner />;
  return (
    <div>
      <div className="indiaflexContainer">
        <Logs logData={logData} />
        <DailyData dailyData={dailyData} />
      </div>
    </div>
  );
};

export default India;
