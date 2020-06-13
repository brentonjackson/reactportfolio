import React from "react";
import { motion } from "framer-motion"
import ResumeButton from "./ResumeButton.js";
import "./about.css";
import headshot from "./content/brenton.png";

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <section id="about">
          <motion.h1
            initial={{ x:'-150vw' }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 80, duration: 5, delay: 0.5 }}
          >
            Brenton Jackson
          </motion.h1>
          <motion.p id="animatedSubhead" className="subheader"
            initial={{ x:'150vw' }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 80, duration: 5, delay: 1.5 }}
          >
            designer / front end developer
          </motion.p>
          <ResumeButton />
        </section>
        <motion.section id="picture-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 3}}
        >
          <img alt="headshot" src={headshot}></img>
        </motion.section>
      </div>
    );
  }
}

export default About;
