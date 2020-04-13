import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="overlays">
      <div className="lds-hourglass">
        <h2 className="loading">Loading....</h2>
      </div>
    </div>
  );
};

export default Spinner;
