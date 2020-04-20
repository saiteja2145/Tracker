import React from "react";
import StateDailyData from "./StateDailyData";
import CountUp from "react-countup";
import { format, parse } from "date-fns";
const DistrictWise = ({
  testedData,
  selectState,
  districtWiseData,
  stateWiseData,
  setselectState,
  stateDailyData,
}) => {
  const stateWiseDistrictData = districtWiseData.find(
    (stateData) => stateData.state === selectState[0]
  );
  const totalTested = testedData.find(
    (state) => state.state === selectState[0] && state.totaltested !== ""
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
      <div className="testedContainer card__primary">
        <h2 className="heading--secondary textCenter mar-tb-5">{`Testing Stats`}</h2>
        <div className="lineContainer">
          <h2 className="heading--secondary pad-r-1 mar-tb-5">Tested : </h2>
          <h2 className="heading--secondary pad-l-1 mar-tb-5">
            <CountUp
              start={0}
              end={+totalTested.totaltested}
              separator=","
              duration={2}
            ></CountUp>
          </h2>
        </div>
        <div className="lineContainer">
          <h2 className="heading--secondary pad-r-1 mar-tb-5">
            Negative + Unconfirmed :{" "}
          </h2>
          <h2 className="heading--secondary pad-1-1 mar-tb-5">
            <CountUp
              start={0}
              end={+totalTested.negative + +totalTested.unconfirmed}
              separator=","
              duration={2}
            ></CountUp>
          </h2>
        </div>
        <h2 className="heading--secondary pad-r-1 mar-tb-5 textCenter">
          {`As of ${format(
            parse(totalTested?.updatedon, "dd/MM/yyyy", new Date()),
            "dd MMM"
          )}`}
        </h2>
      </div>
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
                <td className="tableBodyDist pad">{i + 1}</td>
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
