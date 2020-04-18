import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./IndianStates.css";
import StateTable from "./StateTable";
import { fetchData } from "../Global/api/api";
import Spinner from "../Global/Spinner/Spinner";
import DistrictWise from "./DistrictWise";

const IndianStateWise = () => {
  const [stateWiseData, setstateWiseData] = useState([]);
  const [districtWiseData, setdistrictWiseData] = useState([]);
  const [selectState, setselectState] = useState(["Andhra Pradesh", "ap"]);
  const [stateDailyData, setstateDailyData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [stateD, districtD, stateDailyD] = await Promise.all([
          Axios.get("https://api.covid19india.org/data.json"),
          Axios.get("https://api.covid19india.org/v2/state_district_wise.json"),
          Axios.get("https://api.covid19india.org/states_daily.json"),
        ]);
        const dailyStateConfirmedData = stateDailyD.data.states_daily.filter(
          (val) => val.status === "Confirmed"
        );
        const dailyStateRecoveredData = stateDailyD.data.states_daily.filter(
          (val) => val.status === "Recovered"
        );
        const dailyStateDeceasedData = stateDailyD.data.states_daily.filter(
          (val) => val.status === "Deceased"
        );
        setstateWiseData(stateD.data.statewise);
        setstateDailyData([
          dailyStateConfirmedData,
          dailyStateRecoveredData,
          dailyStateDeceasedData,
        ]);
        setdistrictWiseData(districtD.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  if (stateWiseData.length === 0 || districtWiseData.length === 0)
    return <Spinner />;
  return (
    <div className="stateContainer">
      <StateTable
        stateWiseData={stateWiseData}
        setselectState={setselectState}
      />
      <DistrictWise
        selectState={selectState}
        districtWiseData={districtWiseData}
        stateWiseData={stateWiseData.filter((data) => data.state !== "Total")}
        setselectState={setselectState}
        stateDailyData={stateDailyData}
      />
    </div>
  );
};

export default IndianStateWise;
