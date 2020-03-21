import React from 'react';
import './content/styles.css';
import resume from "./content/Brenton-Jackson-resume.pdf";



class ResumeButton extends React.Component {
	render() {	
		return(
			<a href={resume} id="resume_link" target="_blank">
				<button className="resume_btn">
		                <i id="download-icon" className="fa fa-download" aria-hidden="true"></i>
		                Resume
		        </button>
	        </a>
		)
	}
}

export default ResumeButton;