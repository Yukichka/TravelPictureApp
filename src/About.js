import React from "react";
import { SocialIcon } from "react-social-icons";

export function About() {
  return (
    <div>
      <h3>About</h3>
      <div className="comment">
        <p>I am a self-taught junior JavaScript developer.</p>
        <p>Located in London.</p>
        <br />

        <p>
          Contact me at 
          <SocialIcon
            url="https://www.linkedin.com/in/yuki-inasawa-23175516a/"
            style={{ margin: "8px" }}
          />
          <SocialIcon
            url="https://github.com/Yukichka"
            style={{ margin: "8px" }}
          />
          <SocialIcon
            url="https://www.instagram.com/ukinnn/"
            style={{ margin: "8px" }}
          />
        </p>
      </div>
      <br />
    </div>
  );
}
