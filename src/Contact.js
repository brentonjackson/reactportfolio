import React from "react";
import "./contact.css";
import {motion} from "framer-motion";
import SvgAvatarPhone from "./Icons/SvgAvatarPhone";

const containerVariants = {
  exit: {
    x: '-100vw',
    transition: { ease: "easeInOut", duration: 3 }
  }
}

const contactHeaderVariants = {
  hidden: {
    y: '-100vh'
  },
  visible: {
    y:0,
    transition: {
      duration: 2, type: "spring", stiffness: 75
    }
  }
}

const paragraphVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {
      duration: 2, delay: .8, type: "spring", stiffness: 60
    }
  }
}

const socialVariants = {
  hidden: {
    y: '100vh'
  },
  visible: {
    y:0,
    transition: {
      duration: 2, delay: 1, type: "spring", stiffness: 60
    }
  },
}

const linkVariants = {
  hover: { scale: 1.2 },
  tap: { scale: 0.8 }
}


class Contact extends React.Component {
  render() {
    return (
      <motion.div className="contact-wrapper" variants={containerVariants} exit="exit">
        <SvgAvatarPhone />
        <div id="contact" className="contact">
          <div className="contact-header">
            <motion.h2 
              variants={contactHeaderVariants}
              initial="hidden"
              animate="visible"
            >
              Give me a shout
            </motion.h2>
            <motion.p
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
            >
              Email is the best way to reach me.
              <br /> I'm usually in the Atlanta area if you want to meet in
              person. Let's grab some coffee!
            </motion.p>
          </div>
          <motion.ul className="socials"
            variants={socialVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li className="social-link"
              variants={linkVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8}}
            >
              <a
                href="https://www.linkedin.com/in/jacksonbrenton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in social-icon"></i> LinkedIn
              </a>
            </motion.li>
            <motion.li className="social-link"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a
                href="https://github.com/brentonjackson"
                target="_blank"
                rel="noopener noreferrer"
                id="profile-link"
              >
                <i className="fab fa-github github-icon fa-lg social-icon"></i>{" "}
                GitHub
              </a>
            </motion.li>
            <motion.li className="social-link"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a
                href="mailto:bjackson71@gatech.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-at social-icon"></i> Email
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
      
    );
  }
}

export default Contact;
