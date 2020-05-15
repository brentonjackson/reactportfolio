import React from "react"
import ResumeButton from './ResumeButton.js'
import './about.css'
 
class About extends React.Component{
	render() {
		return (
			<div className="about-container">
				<section id="about">
					<h2>Brenton Jackson</h2>
					<p id="animatedSubhead" className="subheader animated bounceInLeft">designer / front end developer</p>
					<ResumeButton />
				</section>
				<section id="picture-container">
					<img alt="headshot" src={require("./content/brenton.png")}></img>
				</section>
			</div>
	  	)
	}
}
 
export default About;