import React from 'react';
import { motion } from "framer-motion"
import resume from "./content/Brenton-Jackson-resume.pdf";

const pictureVariants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
		transition: {
		duration: 3, delay: 3
		}
	},
	tap: {
		scale: 0.8
	}
}

const buttonVariants = {
	visible: {
		transition: {
			type: 'spring', stiffness: 250, duration: .5
		}
	},
	hover: {
		scale: 1.3, boxShadow:"0px 0px 8px rgba(255,255,255,1)"
	}
}

class ResumeButton extends React.Component {
	render() {	
		return(
			<motion.a href={resume} id="resume_link" target="_blank" rel="noopener noreferrer"
				variants={pictureVariants}	
				initial="hidden"
            	animate="visible"
				whileTap="tap"
			>
				<motion.button className="resume_btn"
					variants={buttonVariants}
					whileHover="hover"
				>
		                <i id="download-icon" className="fa fa-download" aria-hidden="true"></i>
		                Resume
		        </motion.button>
	        </motion.a>
		)
	}
}

export default ResumeButton;