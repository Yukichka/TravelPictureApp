import React from "react";
import { travel } from "./dataset";
import { CityMap } from "./CityMap";


export function Image({ match }) {
  const city = travel
    .find(({ id }) => id === match.params.countryId)
    .cities.find(({ id }) => id === match.params.cityId);
  return (
    <div>
      <h3>{city.name}</h3>
      <CityMap cityId={city.id} />
      <br />
      {city.images.length !== 0 ? (
        city.images.map((img, idx) => (
          <img src={img} alt="" className="image" key={idx} />
        ))
      ) : (
        <div className="comment">No pictures yet!</div>
      )}
      <br />
    </div>
  );
}
