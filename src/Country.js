import React from "react";
import { Link } from "react-router-dom";
import { travel } from "./dataset";
import { Card, CardImg, CardText, CardBody, CardGroup } from "reactstrap";

export function Country({ match }) {
  // console.log(match);
  const country = travel.find(({ id }) => id === match.params.countryId);
  return (
    <div>
      <h3>{country.country}</h3>
      {country.cities.map(city => (
        <div key={city.id}>
          {city.location !== "" ? (
            <CardGroup className="container">
              <Link to={`${match.url}/${city.id}`}>
                <Card>
                  <CardBody>
                    <CardImg src={city.location} alt={city.name} />

                    <CardText className="cardtext">{city.name}</CardText>
                  </CardBody>
                </Card>
              </Link>
            </CardGroup>
          ) : (
            <CardGroup style={{margin:"10px"}}>
              <Card body className="text-center">
                {city.name}
              </Card>
            </CardGroup>
          )}
        </div>
      ))}
    </div>
  );
}
