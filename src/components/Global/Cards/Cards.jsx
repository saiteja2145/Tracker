import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";

import "./Cards.css";
import Card from "./Card/Card";
import Spinner from "../Spinner/Spinner";

const currentTrendsDatas = [
  {
    name: "Confirmed",
    classNames: "card__primary",
  },
  {
    name: "Recovered",
    classNames: "card__secondary",
  },
  {
    name: "Dead",
    classNames: "card__tertiary",
  },
];

const Cards = ({ country, currentTrendsCards }) => {
  const [currentTrends, setCurrentTrends] = useState(null);

  useEffect(() => {
    setCurrentTrends(null);
    if (country) {
      setCurrentTrends(currentTrendsCards);
    } else {
      const fetchDataAxios = async () => {
        const data = await fetchData(country);
        setCurrentTrends(data);
      };
      fetchDataAxios();
    }
  }, [country, currentTrendsCards]);

  if (!currentTrends) {
    return <Spinner />;
  }

  const { confirmed, recovered, deaths, lastUpdate } = currentTrends;
  return (
    <div className="cards__container">
      {currentTrendsDatas.map((currentTrendsData) => {
        let data = confirmed.value;
        if (currentTrendsData.name === "Recovered") {
          data = recovered.value;
        } else if (currentTrendsData.name === "Dead") {
          data = deaths.value;
        }

        return (
          <Card
            key={currentTrendsData.name}
            data={data}
            classNames={currentTrendsData.classNames}
            lastUpdate={lastUpdate}
            name={currentTrendsData.name}
          />
        );
      })}
    </div>
  );
};

export default Cards;
