import React from "react";
import './contact.css';
 
class Contact extends React.Component {
	render() {
		return (
		    <div id="contact" className="contact">
		        <div className="header">
		            <h2 className="animated slideInLeft slow">Let's work together...</h2>
		            <p className="animated slideInRight slow">Find me on these platforms.</p>
		        </div>
		        <ul className="socials animated slideInUp slow">
		            <li className="social-link"><a href="https://www.linkedin.com/in/jacksonbrenton" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in social-icon"></i> LinkedIn</a></li>
		            <li className="social-link"><a href="https://github.com/brentonjackson" target="_blank" rel="noopener noreferrer" id="profile-link"><i className="fab fa-github github-icon fa-lg social-icon"></i> GitHub</a></li>
		            <li className="social-link"><a href="mailto:bjackson71@gatech.edu" target="_blank" rel="noopener noreferrer"><i className="fas fa-at social-icon"></i> Email</a></li>
		        </ul>
    		</div>
	  	)
	}
}
 
export default Contact;