import React from "react";
import CountUp from "react-countup";

const Card = ({ data, classNames, lastUpdate, name }) => {
  return (
    <div className={`card__item ${classNames}`}>
      <h2 className="heading--secondary">{`Total ${name}`}</h2>
      <h2 className="heading--secondary">
        <CountUp start={0} end={data} separator="," duration={2.5}></CountUp>
      </h2>
      <h2 className="heading--secondary">Last Update</h2>
      <h2 className="heading--secondary">
        {new Date(lastUpdate).toDateString()}
      </h2>
    </div>
  );
};

export default Card;
