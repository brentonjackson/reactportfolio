import React from "react";
import ResumeButton from "./ResumeButton.js";
import "./about.css";
import headshot from "./content/brenton.png";

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <section id="about">
          <h1>Brenton Jackson</h1>
          <p id="animatedSubhead" className="subheader animated bounceInLeft">
            designer / front end developer
          </p>
          <ResumeButton />
        </section>
        <section id="picture-container">
          <img alt="headshot" src={headshot}></img>
        </section>
      </div>
    );
  }
}

export default About;
