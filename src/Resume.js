import React from "react";
import {motion} from "framer-motion"
import './resume.css';

const containerVariants = {
    exit: {
      x: '-100vw',
      transition: { ease: "easeInOut" }
    }
  }

class Resume extends React.Component {
	render() {
		return (
		    <motion.div id="resume-container" variants={containerVariants} exit="exit">
                <div className="stuff">
                    <h2 className="name">Brenton Jackson</h2>
                    <p className="subtitle">Software Developer</p>
                    <ul className="contact-list"><li>brenton.jackson@gatech.edu</li>
                        <li>(478)361-3238 | Atlanta, GA</li>
                        <li><a href="http://linkedin.com/in/jacksonbrenton" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="http://github.com/brentonjackson" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="http://brentonjackson.me">Portfolio</a></li>
                    </ul>
                    <h3 className="section-header">Skills</h3>
                        <ul className="skills">
                            <li>Languages: <strong>JavaScript, Java, MATLAB, C++</strong></li>
                            <li>Technologies: <strong>React, MongoDB, Express, Node, HTML5, CSS3, jQuery, Bootstrap, git, WordPress, SQL</strong></li>
                            <li>Design: <strong>Research, Wireframing, Digital mockups</strong></li>
                        </ul>
                    <h3 className="section-header">Education</h3>
                        <ul className="education">
                            <li className="content-header"><strong>Georgia Institute of Technology,</strong> Industrial Design - 2017-2020</li>
                                <ul className="content">
                                    <li>Extensive Coursework in Computer Engineering and Industrial Design</li>
                                </ul>
                            <li className="content-header">Codepath, Mobile App Design - 2020</li>
                                <ul className="content">
                                    <li>3-month program learning Android Development in Java using Android Studio</li>
                                </ul>
                            <li className="content-header">Georgia College and State University, Physics/ Engineering Dual-Degree</li>
                                <ul className="content">
                                    <li>Physics TA, Officer of Physics/Astronomy Club</li>
                                </ul>
                        </ul>
                    
                    <h3 className="section-header">Relevant Experience</h3>
                    <ul className="experience">
                        <li className="content-header">Freelance Web Developer</li>
                            <ul className="content">
                                <li>Independently developed a website for client's lash business that increased client's sales by 45% - <a href="https://savagelashesatl.com">Link</a></li>
                                <li>Developed a website for small business to allow teacher to transition to independent home schooling and tutoring online - <a href="https://hope2learn.com">Link</a></li>
                            </ul>
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
                    
                    <h3 className="section-header">Recent Projects</h3>
                    <ul className="recent-projects">
                        <li className="content-header"><a href="https://github.com/brentonjackson/mern-workout-app" target="_blank" rel="noopener noreferrer">MERN Workout Tracker</a></li>
                            <ul className="content">
                                <li><strong>React, MongoDB, Express, Node,</strong> Auth0</li>
                                <li>Designed/launched web app that allows users to keep track of their workouts and provides motivation to persevere</li>
                                <li>Designed/implemented API to allow user to save, delete, update, and create new workouts</li>
                            </ul>
                        <li className="content-header"><a href="https://brentonjackson.github.io/fitnessgram" target="_blank" rel="noopener noreferrer">FitnessGram</a></li>
                            <ul className="content">
                                <li><strong>JavaScript, CSS3, HTML5</strong></li>
                                <li>Developed site to help motivate users and hold themselves accountable while working out</li>
                            </ul>
                        <li className="content-header"><a href="https://brentonjackson.me" target="_blank" rel="noopener noreferrer">Personal Portfolio</a></li>
                            <ul className="content">
                                <li><strong>React, JavaScript, jQuery,</strong> Animate.css, HTML, CSS</li>
                                <li>  Designed/launched responsive website to showcase projects</li>
                            </ul>
                        <li className="content-header"><a href="https://github.com/brentonjackson/Flashcard-Android-App" target="_blank" rel="noopener noreferrer">Flashcards Android App</a></li>
                            <ul className="content">
                                <li>Android Studio, Java, SQL</li>
                                <li>Developed Android App that creates, edits, saves, and deletes flashcards to and from database</li>
                            </ul>
                    </ul>
                    
                </div>
    		</motion.div>
	  	)
	}
}
 
export default Resume;