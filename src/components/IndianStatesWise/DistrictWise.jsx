import React from "react";

const DistrictWise = ({
  selectState,
  districtWiseData,
  stateWiseData,
  setselectState,
}) => {
  const stateWiseDistrictData = districtWiseData.find(
    (stateData) => stateData.state === selectState
  );
  return (
    <div className="districtCont">
      <h2 className="heading--secondary textCenter">{`Stats for ${selectState} State`}</h2>
      <select
        onChange={(e) => setselectState(e.target.value)}
        value={selectState}
        className="countries__select textCenter marTopBot"
      >
        {stateWiseData.map((state) => (
          <option value={state.state} key={state.state}>
            {state.state}
          </option>
        ))}
      </select>
      {!stateWiseDistrictData ? (
        <h2 className="heading--secondary textCenter">{`No Cases Found in ${selectState} State`}</h2>
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
