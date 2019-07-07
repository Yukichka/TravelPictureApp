import React from "react";
import { travel } from "./dataset";
import { CountriesMap } from "./CountriesMap";
import { Col, Row } from "reactstrap";

export function Home() {
  return (
    <div>
      <Row>
        <Col xs="4">
          <h3>Home</h3>
          <div className="comment">
            <div>Me, a traveler and cafe lover.</div>
            <div>Always up for somewhere fun!</div>
            <div>
              Exploring the earth
              <span role="img" aria-label="earth">
                {" "}
                &#127759;
              </span>
            </div>
            <br />
            <div>
              Visited<b> {travel.length} </b>counties
              <span role="img" aria-label="flight">
                {" "}
                &#9992;&#9992;&#9992;
              </span>
            </div>
            <br />
          </div>
        </Col>
        <Col xs="8">
          {" "}
          <CountriesMap />
        </Col>
      </Row>
      <hr color="#FF1493" />
    </div>
  );
}
