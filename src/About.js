import React from "react";
import { displayPartsToString } from "typescript";

export function About() {
  return (
    <div>
      <h3>About</h3>
      <div className="comment">
      <p>I am a self-taught junior JavaScript developer.</p>
      <p>Located in London.</p>
      <br />
      
        <p>Contact me at: 
        <a href="https://www.linkedin.com/in/yuki-inasawa-23175516a/"> LinkedIn </a>
        <a href="https://github.com/Yukichka">Github </a>
        <a href="https://www.instagram.com/ukinnn/">Instagram</a>
        </p>
      </div>
      <br/>
    </div>
  );
}
