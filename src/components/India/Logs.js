import React from "react";
import { formatDistance } from "date-fns";
import "./Logs.css";

const Logs = ({ logData }) => {
  const logDatas = (
    <div className="notificationContainer">
      <h2 className="heading--secondary alignNotification">
        Latest Notifications
      </h2>
      {logData.length > 0
        ? logData.map((data) => {
            return (
              <div className="notificationCard" key={data.timestamp}>
                <h2 className="heading--secondary color-gray">
                  {"About " +
                    formatDistance(
                      new Date(data.timestamp * 1000),
                      new Date()
                    ) +
                    " Ago"}
                </h2>
                {data.update.split("\n").map((val, i) => (
                  <h2 className="heading--secondary color-black" key={i}>
                    {val}
                  </h2>
                ))}
              </div>
            );
          })
        : null}
    </div>
  );
  return <div>{logDatas}</div>;
};

export default Logs;
