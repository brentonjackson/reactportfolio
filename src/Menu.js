import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import resume from "./content/Brenton-Jackson-resume.pdf";
// import "./menu.css";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/" className="menu">
        Home
      </a>
      <a href="/projects" className="menu">
        Projects
      </a>
      {/* <a href={resume} id="resume_link" target="_blank" rel="noopener noreferrer" className="menu"> */}
      <a href={resume} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      <a href="/contact" className="menu">
        Contact
      </a>
    </StyledMenu>
    // <section className="styled-menu" open={open}>
    //     <a href="/" className="menu">
    //         <span role="img" aria-label="home">	&#127968;</span>
    //         Home</a>
    //     <a href="/projects" className="menu">
    //         <span role="img" aria-label="projects">	&#128187;</span>
    //         Projects
    //     </a>
    //     <a href="/resume" className="menu">
    //         <span role="img" aria-label="resume">&#128188;</span>
    //         Resume
    //     </a>
    //     <a href="/contact" className="menu">
    //         <span role="img" aria-label="contact">📧</span>
    //         Contact
    //     </a>
    // </section>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
