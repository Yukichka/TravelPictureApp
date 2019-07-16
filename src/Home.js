import React from "react";
import { travel } from "./dataset";
import { CountriesMap } from "./CountriesMap";
import { Col, Row } from "reactstrap";
import MediaQuery from "react-responsive";

export function Home() {
  return (
    <div>
      <MediaQuery minDeviceWidth={1224}>
        {matches => {
          if (matches) {
            return (
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
            );
          } else {
            return (
              <div>
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
                <CountriesMap />
              </div>
            );
          }
        }}
      </MediaQuery>
    </div>
  );
}
