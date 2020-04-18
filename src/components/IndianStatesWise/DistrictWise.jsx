import React from "react";
import StateDailyData from "./StateDailyData";

const DistrictWise = ({
  selectState,
  districtWiseData,
  stateWiseData,
  setselectState,
  stateDailyData,
}) => {
  const stateWiseDistrictData = districtWiseData.find(
    (stateData) => stateData.state === selectState[0]
  );

  return (
    <div className="districtCont">
      <h2 className="heading--secondary textCenter">{`Stats for ${selectState[0]} State`}</h2>
      <select
        onChange={(e) => {
          return setselectState([
            e.target.value,
            e.target.options[e.target.selectedIndex].id,
          ]);
        }}
        value={selectState[0]}
        className="countries__select textCenter marTopBot"
      >
        {stateWiseData.map((state) => {
          return (
            <option
              value={state.state}
              key={state.state}
              id={state.statecode.toLowerCase()}
            >
              {state.state}
            </option>
          );
        })}
      </select>
      <StateDailyData
        stateDailyData={stateDailyData}
        selectState={selectState}
      />
      {!stateWiseDistrictData ? (
        <h2 className="heading--secondary textCenter">{`No Cases Found in ${selectState[0]} State`}</h2>
      ) : (
        <table className="stateTable">
          <thead>
            <tr className="stateTableHeadings">
              <th className="tableStateHeading pad">SNO</th>
              <th className="tableStateHeading pad">District</th>
              <th className="tableStateHeading pad">Confirmed</th>
            </tr>
          </thead>
          <tbody>
            {stateWiseDistrictData.districtData.map((stateD, i) => (
              <tr key={stateD.district} className="tbodyContainers">
                <td className="tableBodyDist pad">{i}</td>
                <td className="tableBodyDist pad">{stateD.district}</td>
                <td className="tableBodyDist pad">{stateD.confirmed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DistrictWise;
