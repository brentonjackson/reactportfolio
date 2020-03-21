import React from "react"
import ResumeButton from './ResumeButton.js'
 
class About extends React.Component{
	render() {
		return (
			<section id="welcome-section" className="about">
		    
				<h1>Hi, I'm Brenton</h1>
				<p className="subheader animated bounceInLeft delay-1s">designer / front end developer</p>
			    <ResumeButton />
			</section>
	  	)
	}
}
 
export default About;