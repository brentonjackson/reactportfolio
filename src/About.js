import React from "react";
import { motion } from "framer-motion"
import ResumeButton from "./ResumeButton.js";
import "./about.css";
import headshot from "./content/brenton.png";

const containerVariants = {
  exit: {
    x: '-100vw',
    transition: { type: "tween", ease: "easeInOut", duration: 3 }
  }
}

const headerVariants = {
  hidden: {
    x: '-150vw'
  },
  visible: {
    x: 0,
    transition: {
      type: "spring", stiffness: 80, duration: 5, delay: 0.5
    }
  }
}

const subheadVariants = {
  hidden: {
    x: '150vw'
  },
  visible: {
    x: 0,
    transition: {
      type: "spring", stiffness: 80, duration: 5, delay: 1.5
    }
  }
}

const pictureVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3, delay: 3
    }
  }
}

class About extends React.Component {
  render() {
    return (
      <motion.div className="about-container" variants={containerVariants} exit="exit">
        <section id="about">
          <motion.h1
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            Brenton Jackson
          </motion.h1>
          <motion.p id="animatedSubhead" className="subheader"
            variants={subheadVariants}
            initial="hidden"
            animate="visible"
          >
            front end developer
          </motion.p>
          <ResumeButton />
        </section>
        <motion.section id="picture-container"
          variants={pictureVariants}
          initial="hidden"
          animate="visible"
        >
          <img alt="headshot" src={headshot}></img>
        </motion.section>
      </motion.div>
    );
  }
}

export default About;
