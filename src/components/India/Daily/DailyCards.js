import React from "react";
import CountUp from "react-countup";
import "./DailyCards.css";
const DAILY_CARDS_DATA = [
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

const DailyCards = ({ cardData }) => {
  const DailyCardData = (
    <div className="dailyCardsContainer">
      {DAILY_CARDS_DATA.map(({ classNames, name }) => {
        let totalData = cardData.confirmed;
        let todayData = cardData.dailyconfirmed;
        if (name === "Recovered") {
          totalData = cardData.recovered;
          todayData = cardData.dailyrecovered;
        } else if (name === "Dead") {
          totalData = cardData.deaths;
          todayData = cardData.dailydeceased;
        }
        return (
          <div className={`card__item ${classNames} dailyCards`} key={name}>
            <h2 className="heading--secondary">{`Total ${name}`}</h2>
            <h2 className="heading--secondary">
              <CountUp
                start={0}
                end={!isNaN(parseInt(totalData)) ? parseInt(totalData) : 0}
                separator=","
                duration={2.5}
              ></CountUp>
            </h2>
            <h2 className="heading--secondary">{`Today ${name}`}</h2>
            <h2 className="heading--secondary">
              <CountUp
                start={0}
                end={!isNaN(parseInt(todayData)) ? parseInt(todayData) : 0}
                separator=","
                duration={2.5}
              ></CountUp>
            </h2>
          </div>
        );
      })}
    </div>
  );
  return (
    <div>
      <h2 className="heading--secondary textCenter">{`Total Active : ${cardData.active}`}</h2>

      {DailyCardData}
    </div>
  );
};

export default DailyCards;
