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
                        <li><a href="http://linkedin.com/in/jacksonbrenton">LinkedIn</a></li>
                        <li><a href="http://github.com/brentonjackson">GitHub</a></li>
                        <li><a href="http://driventocode.com">Portfolio</a></li>
                    </ul>
                    <h3 className="section-header">Skills</h3>
                        <ul className="skills">
                            <li>Languages: JavaScript, Java, MATLAB, C++</li>
                            <li>Technologies: React, MongoDB, Express, Node, HTML5, CSS3, jQuery, Bootstrap, git</li>
                            <li>Design: Research, Wireframing, Digital mockups</li>
                        </ul>
                    <h3 className="section-header">Education</h3>
                        <ul className="education">
                            <li className="content-header">Georgia Institute of Technology, Industrial Design - 2017-2020</li>
                                <ul className="content">
                                    <li>Extensive Coursework in Computer Engineering and Industrial Design</li>
                                </ul>
                            <li className="content-header">Big Nerd Ranch, Full Stack and React - 2020</li>
                                <ul className="content">
                                    <li>Learned to build responsive full-stack web applications with React, CSS3, and Node.js</li>
                                </ul>
                            <li className="content-header">Codepath, Mobile App Design - 2020</li>
                                <ul className="content">
                                    <li>3-month program learning Android Development in Java using Android Studio</li>
                                </ul>
                        </ul>
                    <h3 className="section-header">Recent Projects</h3>
                    <ul className="recent-projects">
                        <li className="content-header"><a href="https://github.com/brentonjackson/mern-workout-app" target="_blank">MERN Workout Tracker</a></li>
                            <ul className="content">
                                <li>React, MongoDB, Express, Node, Auth0</li>
                                <li>Designed/launched web app that allows users to keep track of their workouts and provides motivation to persevere</li>
                                <li>Designed/implemented API to allow user to save, delete, update, and create new workouts</li>
                            </ul>
                        <li className="content-header"><a href="https://brentonjackson.github.io/fitnessgram">FitnessGram</a></li>
                            <ul className="content">
                                <li>JavaScript, CSS3, HTML</li>
                                <li>  Developed site to help motivate users and hold themselves accountable while working out</li>
                            </ul>
                        <li className="content-header"><a href="https://driventocode.com">Personal Portfolio</a></li>
                            <ul className="content">
                                <li>React, JavaScript, jQuery, Animate.css, HTML, CSS</li>
                                <li>  Designed/launched responsive website to showcase projects</li>
                            </ul>
                        <li className="content-header"><a href="https://github.com/brentonjackson/Flashcard-Android-App">Android App</a></li>
                            <ul className="content">
                                <li>Android Studio, Java, SQL</li>
                                <li>Developed Android App that creates, edits, saves, and deletes flashcards to and from database</li>
                            </ul>
                    </ul>
                    <h3 className="section-header">Relevant Experience</h3>
                    <ul className="experience">
                        <li className="content-header">Georgia Tech Design Bloc, User Researcher - 2019</li>
                            <ul className="content">
                                <li>Researched MARTA bus-stops to gather needs and pain-points to improve rider experience</li>
                                <li>Communicated observations, needs, and potential solutions to stakeholders</li>
                            </ul>
                        <li className="content-header">Georgia College, MATLAB Programmer - 2014-2016</li>
                            <ul className="content">
                                <li>Developed 3 sets of data catalogs in MATLAB to analyze and statistically compare with observed astronomy data</li>
                                <li>Won two research grant proposals and presented at APS Physics Conferences with team</li>
                            </ul>
                    </ul>
                </div>
    		</div>
	  	)
	}
}
 
export default Resume;