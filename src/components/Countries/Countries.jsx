import React, { useEffect, useState } from "react";
import "./Countries.css";
import { fetchCountries } from "../api/api";

const Countries = ({ country, setCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const countriesList = await fetchCountries();
      setCountries(countriesList);
    };
    getCountries();
  }, []);

  return (
    <div className="countries__container">
      <select
        value={country}
        className="countries__select"
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((countryVal) => (
          <option value={countryVal} key={countryVal}>
            {countryVal}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Countries;
