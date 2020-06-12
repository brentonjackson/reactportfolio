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
            <motion.h2 className="animated slideInDown slow" 
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
            >Give me a shout</motion.h2>
            <p className="animated slideInRight slow">
              Email is the best way to reach me.
              <br /> I'm usually in the Atlanta area if you want to meet in
              person. Let's grab some coffee!
            </p>
          </div>
          <ul className="socials animated slideInUp slow">
            <li className="social-link">
              <a
                href="https://www.linkedin.com/in/jacksonbrenton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in social-icon"></i> LinkedIn
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://github.com/brentonjackson"
                target="_blank"
                rel="noopener noreferrer"
                id="profile-link"
              >
                <i className="fab fa-github github-icon fa-lg social-icon"></i>{" "}
                GitHub
              </a>
            </li>
            <li className="social-link">
              <a
                href="mailto:bjackson71@gatech.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-at social-icon"></i> Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    );
  }
}

export default Contact;
