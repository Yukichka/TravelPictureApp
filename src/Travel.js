import React from "react";
import { Route, Link } from "react-router-dom";
import { Country } from "./Country";
import { travel } from "./dataset";

export function Travel({ match }) {
  return (
    <div>
      <h3>Travel</h3>
      <ul>
        {travel
          .filter(e => e.cities.length !== 0)
          .map(({ country, id, cities }) => (
            <li key={id}>
              <Link to={`/travel/${id}`}>{country}</Link>
            </li>
          ))}
      </ul>
      <div className="comment">
        ...and lots more! coming soon
        <span role="img" aria-label="flight">
          {" "}
          &#9992;
        </span>
      </div>
      <br />
      <hr />
    </div>
  );
}
