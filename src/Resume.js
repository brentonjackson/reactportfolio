import React from "react";
import './resume.css';
 
class Resume extends React.Component {
	render() {
		return (
		    <div id="resume-container">
                <div className="stuff">
                    <h2 className="name">Brenton Jackson</h2>
                    <p className="subtitle">Software Developer</p>
                    <ul className="contact-list"><li>brenton.jackson@gatech.edu</li>
                        <li>(478)361-3238 | Atlanta, GA</li>
                        <li>linkedin.com/in/jacksonbrenton</li>
                        <li>github.com/brentonjackson</li>
                        <li>driventocode.com</li>
                    </ul>
                    <h3 className="section-header">Skills</h3>
                        <ul className="skills">
                            <li>Languages: JavaScript, Java, MATLAB, C++</li>
                            <li>Technologies: React, MongoDB, Express, Node, HTML5,</li>
                            <li>Design: Research, Wireframing, Digital mockups</li>
                        </ul>
                    <h3 className="section-header">Education</h3>
                        <ul className="education">
                            <li>Georgia Tech</li>
                            <li>Big Nerd Ranch</li>
                            <li>Codepath</li>
                        </ul>
                    <h3 className="section-header">Recent Projects</h3>
                    <ul className="recent-projects">
                        <li>MERN Workout Tracker</li>
                        <li>FitnessGram</li>
                        <li>Personal Portfolio</li>
                        <li>Android App</li>
                    </ul>
                    <h3 className="section-header">Relevant Experience</h3>
                    <ul className="experience">
                        <li>Georgia Tech Design Bloc</li>
                        <li>Georgia College, MATLAB Programmer</li>
                    </ul>
                </div>
    		</div>
	  	)
	}
}
 
export default Resume;