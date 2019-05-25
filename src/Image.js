import React from "react";
import { travel } from "./dataset";
export function Image({ match }) {
  const country = travel
    .find(({ id }) => id === match.params.countryId)
    .cities.find(({ id }) => id === match.params.cityId);
  return (
    <div>
      <h3>{country.name}</h3>
      <br />
      {country.images.length !== 0 ? (
        country.images.map((img, idx) => (
          <img src={img} alt="" className="image" key={idx} />
        ))
      ) : (
        <div className="comment">No pictures yet!</div>
      )}
    </div>
  );
}
