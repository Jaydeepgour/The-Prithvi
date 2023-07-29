import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../Services";
import "./CountryDetail.css";

export default function CountryDetail(props) {
  const { countryCode } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getCountryDetail(countryCode).then((result) => {
      console.log("result.data", result.data);
      setDetail(result.data);
    });
  }, [countryCode]);

  console.log("countryCode: ", countryCode);
  return (
    <div className="country-detail-wrapper">
      <div>
        <img src={detail.flags?.png} alt={detail.name} className="country-flag" />
      </div>
      <div className="country-details">
        <h2>{detail.name}</h2>
        <p>
          Capital: <span className="capital">{detail.capital}</span>
        </p>
        <p>
          Population: <span className="population">{detail.population}</span>
        </p>
        <p>
          Currencies:{" "}
          <span className="currencies">
            {detail.currencies?.map((currency) => currency.name).join(", ")}
          </span>
        </p>
      </div>
    </div>
  );
}
