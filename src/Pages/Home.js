// 
import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import "./Home.css";
import { getAllCountry } from "../Services";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function Home() {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountriesList, setFilteredCountriesList] = useState([]);
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState("");

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value);
  };

  useEffect(() => {
    getAllCountry().then((result) => {
      const countries = result.data;
      setCountriesList(countries);
      setFilteredCountriesList(countries);
    });
  }, []);

  useEffect(() => {
    const filteredCountries = countriesList.filter((country) => {
      const lowercaseName = country.name.toLowerCase();

      // Check if both region and countryName filters are empty
      if (!region && !countryName) return true;

      // Check region filter
      if (region && country.region === region) return true;

      // Check countryName filter
      if (countryName && lowercaseName.includes(countryName.toLowerCase())) return true;

      return false;
    });

    setFilteredCountriesList(filteredCountries);
  }, [region, countriesList, countryName]);

  return (
    <div className="App">
      <div className="filter-wrapper">
        <TextField
        className="textfield"
          id="outlined-basic"
          label="Filter By Name"
          variant="outlined"
          onChange={handleCountryNameChange}
          value={countryName}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }} className="formfilter">
          <InputLabel id="demo-simple-select-helper-label">Filter By Region</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={region}
            label="Filter By Region"
            onChange={handleRegionChange}
          >
            <MenuItem value="">ALL</MenuItem> {/* Empty value for the initial state */}
            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"Americas"}>America</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Oceania"}>Oceania</MenuItem>
          </Select>
        </FormControl>

      </div>
      <div className="Country-card-wrapper">
        {filteredCountriesList.map((country) => (
          <Link
            to={`/countries/${country.alpha3Code}`}
            key={country.alpha3Code}
            style={{ textDecoration: "none" }}
          >
            <CountryCard
              name={country.name}
              capital={country.capital}
              population={country.population}
              flagurl={country.flags.png} // Corrected variable name
              key={country.alpha3Code}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
