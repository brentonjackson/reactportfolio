import React from "react";
import './content/styles.css';
 
class Contact extends React.Component {
	render() {
		return (
		    <section id="contact" class="contact">
		        <div class="header">
		            <h2>Let's work together...</h2>
		            <p>Find me on these platforms.</p>
		        </div>
		        <ul class="socials">
		            <li class="social-link"><a href="https://www.linkedin.com/in/jacksonbrenton" target="_blank"><i class="fab fa-linkedin-in social-icon"></i> LinkedIn</a></li>
		            <li class="social-link"><a href="https://github.com/brentonjackson" target="_blank" id="profile-link"><i class="fab fa-github github-icon fa-lg social-icon"></i> GitHub</a></li>
		            <li class="social-link"><a href="mailto:bjackson71@gatech.edu" target="_blank"><i class="fas fa-at social-icon"></i> Email</a></li>
		        </ul>
    		</section>
	  	)
	}
}
 
export default Contact;