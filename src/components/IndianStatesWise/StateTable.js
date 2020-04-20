import React from "react";
import "./IndianStates.css";
const StateTable = ({ stateWiseData, setselectState }) => {
  return (
    <div className="stateCont">
      <h2 className="heading--secondary textCenter">State wise Data</h2>
      <table className="stateTable">
        <thead>
          <tr className="stateTableHeadings">
            <th className="tableStateHeading">SNO</th>
            <th className="tableStateHeading">State / UT</th>
            <th className="tableStateHeading">Confirmed</th>
            <th className="tableStateHeading">Recovered</th>
            <th className="tableStateHeading">Active</th>
            <th className="tableStateHeading">Dead</th>
          </tr>
        </thead>
        <tbody>
          {stateWiseData.map((stateD, i) => (
            <tr
              key={stateD.state}
              className="tbodyContainer"
              onClick={() =>
                stateD.state === "Total"
                  ? null
                  : setselectState([
                      stateD.state,
                      stateD.statecode.toLowerCase(),
                    ])
              }
            >
              <td className="tableBody">{stateD.state === "Total" ? "" : i}</td>
              <td className="tableBody">{stateD.state}</td>
              <td className="tableBody">{stateD.confirmed}</td>
              <td className="tableBody">{stateD.recovered}</td>
              <td className="tableBody">{stateD.active}</td>
              <td className="tableBody">{stateD.deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StateTable;
