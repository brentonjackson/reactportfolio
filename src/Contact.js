import React from "react";
import "./contact.css";
import {motion} from "framer-motion";
import SvgAvatarPhone from "./Icons/SvgAvatarPhone";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-wrapper">
        <SvgAvatarPhone />
        <div id="contact" className="contact">
          <div className="contact-header">
            <motion.h2 
              initial={{ y: '-100vh'}}
              animate={{ y: 0 }}
              transition={{ duration: 3}}
            >
              Give me a shout
            </motion.h2>
            <motion.p
              initial={{ x: '100vw'}}
              animate={{ x: 0 }}
              transition={{ duration: 3, delay: 0.8}}
            >
              Email is the best way to reach me.
              <br /> I'm usually in the Atlanta area if you want to meet in
              person. Let's grab some coffee!
            </motion.p>
          </div>
          <motion.ul className="socials"
            initial={{ y: '100vh'}}
            animate={{ y: 0 }}
            transition={{ duration: 3, delay: 1}}
          >
            <motion.li className="social-link"
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
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8}}
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
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8}}
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
      </div>
      
    );
  }
}

export default Contact;
