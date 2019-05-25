import React from "react";
import { Route, Link } from "react-router-dom";
import { Country } from "./Country";
import { travel } from "./dataset";
export function Travel({ match }) {
  console.log(travel);

  return (
    <div>
      <h3>Travel</h3>
      <ul>
        {travel.map(({ country, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{country}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.path}/:countryId`} component={Country} />
    </div>
  );
}
