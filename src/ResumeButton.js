import React from 'react';
import { motion } from "framer-motion"
import resume from "./content/Brenton-Jackson-resume.pdf";



class ResumeButton extends React.Component {
	render() {	
		return(
			<motion.a href={resume} id="resume_link" target="_blank" rel="noopener noreferrer"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3 , delay: 3}}
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8}}
			>
				<motion.button className="resume_btn animated pulse infinite slow"
					whileHover={{ borderColor: '#27726D', color: '#27726D' }}
					transition={{ duration: .5 }}
				>
		                <i id="download-icon" className="fa fa-download" aria-hidden="true"></i>
		                Resume
		        </motion.button>
	        </motion.a>
		)
	}
}

export default ResumeButton;