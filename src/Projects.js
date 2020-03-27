import React from 'react';
import Thumbnail from './Thumbnail.js';

 
class Projects extends React.Component {
	render() {  
		return (
		    <div className = "projects">
		    	<h2 className="project-header animated slideInDown slow">Recent Projects</h2>
		    	
		    	<div className="project-container">
			    	<Thumbnail
			    		link="https://driventocode.com"
			    		image={require("./content/react-portfolio.png")}
			    		title="Portfolio Website"
					/>
					<div className="project-details animated slideInRight slow">
						<h2>Portfolio Website</h2><br/><br/>
						<p>React, HTML, CSS, JavaScript, jQuery, Animate.css</p><br /><br/>
						<h3>Summary</h3>
						<p className="summary">Refactored portfolio in React. 
							I learned how to create React apps from scratch as well as refactor pre-existing HTML sites. Also learned a lot about deployment while doing this.
						</p>
					</div>

			    	<Thumbnail
			    		link="https://brentonjackson.github.io/vower"
			    		image={require("./content/vower-landing-page.png")}
			    		title="Landing Page Redesign"
					/>
					<div className="project-details animated slideInRight slow">
						<h2>Landing Page Redesign</h2><br/><br/>
						<p>HTML, CSS, JavaScript, jQuery, Animate.css</p><br /><br/>
						<h3>Summary</h3>
						<p className="summary">Improved the UI and overall experience (UX) of a startup's landing page. <br/>
							Used animations to keep the attention of a younger target audience, gradients to help with visual hierarchy, 
							and reduced distraction of the user by being minimal in my design approach. <br/>
							Presenting to an actual client made me cognizant about the
							presentation of my work and improved my mockup skills. My client loved the end result!</p>
					</div>
					<Thumbnail
			    		link="https://github.com/brentonjackson/clarion"
			    		image={require("./content/clarion.png")}
			    		title="Mobile App Design"
			    	/>
					<div className="project-details animated slideInRight slow">
						<h2>Mobile App Design</h2><br/><br/>
						<p>Designed/ prototyped with Photoshop, Adobe XD</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">Goal: To simplify the decision users had to make when deciding how to travel anywhere.
						This helped me improve my prototyping skills and stretched my abilities using Adobe XD. Also piqued my interest in REST APIs 
						</p>
					</div>
					<Thumbnail
			    		link="https://github.com/brentonjackson/Flashcard-Android-App"
			    		image={require("./content/flashcard-app.png")}
			    		title="Mobile App Development"
			    	/>
					<div className="project-details animated slideInRight slow">
						<h2>Mobile App Development</h2><br/><br/>
						<p>Java, Android Studio</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">Built app so create, edit, and delete flashcards. Perfect for studying. Click the picture to download the Android app from my Github and try it out! 
						</p>
					</div>
					<Thumbnail
			    		link="https://brentonjackson.github.io/bubbles"
			    		image={require("./content/bubbles.gif")}
			    		title="Take A Break!"
			    	/>
					<div className="project-details animated slideInRight slow">
						<h2>Bubbles</h2><br/><br/>
						<p>HTML5 Canvas, JavaScript</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary one-line">Simple JS app using HTML5 Canvas. Take a break and try it out! 
						</p>
					</div>
					<Thumbnail
			    		link="https://brentonjackson.github.io/tribute"
			    		image={require("./content/witcher-tribute.png")}
			    		title="Video Background Bio Page"
					/>
					<div className="project-details animated slideInRight slow">
						<h2>Video Background Bio Page</h2><br/><br/>
						<p>HTML, CSS, JavaScript					</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">One of my firsts using HTML and CSS. I played around with CSS frameworks like Bootstrap and W3.CSS.
						This helped me grasp Responsive Design and more advanced CSS concepts.</p>
					</div>
				</div>
		    </div>
	  	)
	}
}
 
export default Projects;