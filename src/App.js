import React, { useState, useEffect } from "react";

import "./App.css";
import Icon from "./components/Icon/Icon";
import Cards from "./components/Cards/Cards";
import Countries from "./components/Countries/Countries";
import Charts from "./components/Charts/Charts.jsx";
import { fetchData } from "./components/api/api";

const App = () => {
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

export default App;
