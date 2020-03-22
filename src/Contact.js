import React from "react";
import './App.css';
 
class Contact extends React.Component {
	render() {
		return (
		    <div id="contact" className="contact">
		        <div className="header">
		            <h2 classname="animated bounceIn">Let's work together...</h2>
		            <p classname="animated bounceIn">Find me on these platforms.</p>
		        </div>
		        <ul className="socials animated slideInUp slow">
		            <li className="social-link"><a href="https://www.linkedin.com/in/jacksonbrenton" target="_blank"><i className="fab fa-linkedin-in social-icon"></i> LinkedIn</a></li>
		            <li className="social-link"><a href="https://github.com/brentonjackson" target="_blank" id="profile-link"><i className="fab fa-github github-icon fa-lg social-icon"></i> GitHub</a></li>
		            <li className="social-link"><a href="mailto:bjackson71@gatech.edu" target="_blank"><i className="fas fa-at social-icon"></i> Email</a></li>
		        </ul>
    		</div>
	  	)
	}
}
 
export default Contact;