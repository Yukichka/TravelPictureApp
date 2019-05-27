import React from "react";
import { Route, Link } from "react-router-dom";
import { travel } from "./dataset";
import { Image } from "./Image";
export function Country({ match }) {
  console.log(match);
  const country = travel.find(({ id }) => id === match.params.countryId);
  return (
    <div>
      <h3>{country.country}</h3>

      <ul>
        {country.cities.map(city => (
          <li key={city.id}>
            {city.location !== "" ? (
              <div>
                <Link to={`${match.url}/${city.id}`}>
                  {city.name}
                  <img src={city.location} alt={city.name} className="image" />
                </Link>
              </div>
            ) : (
              <div>{city.name}</div>
            )}
          </li>
        ))}
      </ul>
      <br />

      <hr />
    </div>
  );
}
