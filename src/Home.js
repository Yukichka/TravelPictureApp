import React from "react";
import { travel } from "./dataset";
import {Map} from "./Map";


export function Home() {
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
      <hr color="#FF1493" />
     
    </div>
  );
}
