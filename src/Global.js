import React, { useState, useEffect } from "react";

import "./App.css";
import Icon from "./components/Global/Icon/Icon";
import Cards from "./components/Global/Cards/Cards";
import Countries from "./components/Global/Countries/Countries";
import Charts from "./components/Global/Charts/Charts.jsx";
import { fetchData } from "./components/Global/api/api";

const Global = () => {
  const [country, setCountry] = useState("");

  const [currentTrends, setCurrentTrends] = useState(null);

  useEffect(() => {
    if (country) {
      const fetchDataAxios = async () => {
        const data = await fetchData(country);
        setCurrentTrends(data);
      };
      fetchDataAxios();
    }
  }, [country]);

  return (
    <div className="container">
      <Icon />
      <Cards country={country} currentTrendsCards={currentTrends} />
      <Countries country={country} setCountry={setCountry} />
      <Charts country={country} currentTrends={currentTrends} />
    </div>
  );
};

export default Global;
