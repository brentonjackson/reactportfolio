import React from 'react';
import './content/styles.css';
import resume from "./content/Brenton-Jackson-resume.pdf";
import clarion from "./content/clarion.png";
import survey from "./content/survey.png";



function App() {
  return (
    <div className="App">
      
    {/*<!-- Nav bar -->*/}
    <nav id="navbar" className="nav">
        <ul className="navbar-menu">
            <li className="navbar-item">
                <a href="#welcome-section">About</a>
            </li>
            <li className="navbar-item">
                <a href="#projects">Work</a>
            </li>
            <li className="navbar-item">
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
    {/*<!-- Home section (About) -->*/}
    <section id="welcome-section" className="about">
        <h1 >Hi, I'm Brenton</h1>
        <p className="subheader animated bounceInLeft delay-1s">designer and web developer</p>
        {/*<!-- Scroll down icon -->*/}
        {/*<!-- Scroll down button -->*/}
        
        {/*<!-- Resume button -->*/}
        <a id="resume_link" target="_blank" href={resume}>
            <button className="resume_btn">
                <i id="download-icon" className="fa fa-download" aria-hidden="true"></i>
                Resume
            </button>
        </a>
        
        {/*<!-- Scroll to top icon -->*/}
        <i id="myBtn" className="fas fa-arrow-up"></i>
        <button id="myBtn" title="Go to top">Top</button>
    </section>
    

    {/*<!-- Projects section -->*/}
    <section id="projects" className="projects">
        
        {/*<!-- Header -->*/}
        <h2 className="project-header">Recent Projects</h2>
        
        {/*<!-- Projects container -->*/}
        <div className="project-container">
            <a href="https://brentonjackson.github.io/vower" target="_blank" className="project-tile">
                <img id="vower" src={require("./content/vower-landing-page.png")} className="project-image" alt="project" />
                <p className="project-title">
                    Landing Page Redesign
                </p>
                
                <div id="project_details_container"></div>

            </a>
            <a href="https://github.com/brentonjackson/clarion" target="_blank" className="project-tile">
                <img id="clarion" src={clarion} className="project-image" alt="project" />
                <p className="project-title">
                    Mobile App Design
                </p>
            </a>
            <a href="https://brentonjackson.github.io/tribute" target="_blank" className="project-tile">
                <img src={require("./content/witcher-tribute.png")} className="project-image" alt="project" />
                <p className="project-title">
                    Tribute Page
                </p>
            </a>
            <a href="https://brentonjackson.github.io/survey" target="_blank" className="project-tile">
                <img src={survey} className="project-image" alt="project" />
                <p className="project-title">
                    Survey Form
                </p>
            </a>
        </div>
    </section>
    {/*<!-- Contact section -->*/}
    <section id="contact" className="contact">
        <div className="header">
            <h2>Let's work together...</h2>
            <p>Find me on these platforms.</p>
        </div>
        <ul className="socials">
            <li className="social-link"><a href="https://www.linkedin.com/in/jacksonbrenton" target="_blank"><i className="fab fa-linkedin-in social-icon"></i> LinkedIn</a></li>
            <li className="social-link"><a href="https://github.com/brentonjackson" target="_blank" id="profile-link"><i className="fab fa-github github-icon fa-lg social-icon"></i> GitHub</a></li>
            <li className="social-link"><a href="mailto:bjackson71@gatech.edu" target="_blank"><i className="fas fa-at social-icon"></i> Email</a></li>
        </ul>
    </section>
    {/*<!-- Footer -->*/}
    <section className="foot">
        <p>Created by Brenton Jackson <a href="https://github.com/brentonjackson/portfolio" className="github-link" target="_blank"><i className="fab fa-github github-icon fa-lg"></i></a></p>
    </section>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="index.js"></script>

    {/*<!-- Fonts -->*/}
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Poppins:200i,300,400&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Raleway:700&amp;display=swap" rel="stylesheet"/>
    {/*<!-- Icons -->*/}
    <script src={icons} crossorigin="anonymous"></script>

    </div>
  );
}

export default App;
