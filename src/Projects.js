import React from 'react';
import Thumbnail from './Thumbnail.js';

 
class Projects extends React.Component {
	render() {  
		return (
		    <div className = "projects">
		    	<h2 className="project-header">Recent Projects</h2>
		    	
		    	<div className="project-container">
			    	<Thumbnail
			    		link="https://brentonjackson.github.io/vower"
			    		image={require("./content/react-portfolio.png")}
			    		title="Portfolio Website"
					/>
					<div className="project-details">
						<h2>Portfolio Website</h2><br/><br/>
						<p>React, HTML, CSS, JavaScript, jQuery, Animate.css</p><br /><br/>
						<h3>Summary</h3>
						<p className="summary">This site was my first shipped site in React. I wanted to make my site easier to update and ship by piecing together components. <br/>
							Firsts: Learning how to create React components, pass props, use JSX, React Router, and npm extensively.<br/> 
							I learned how to create React apps from scratch as well as convert pre-existing sites, as well as a lot about deployment while doing this. <br/>
							In learning the basics of React, this was a success!</p>
					</div>

			    	<Thumbnail
			    		link="https://brentonjackson.github.io/vower"
			    		image={require("./content/vower-landing-page.png")}
			    		title="Landing Page Redesign"
					/>
					<div className="project-details">
						<h2>Landing Page Redesign</h2><br/><br/>
						<p>HTML, CSS, JavaScript, jQuery, Animate.css</p><br /><br/>
						<h3>Summary</h3>
						<p className="summary">This project was to see how I could improve the UI and overall experience (UX) of a startup's landing page. <br/>
							Firsts: Using animations to keep the attention of a younger target audience, using gradients to help with visual hierarchy, 
							and being minimal to reduce confusion by the end user. <br/>
							Presenting to an actual client made me cognizant about the
							presentation of my work and improved my skills creating mockups. My client loved the end result!</p>
					</div>
					<Thumbnail
			    		link="https://github.com/brentonjackson/clarion"
			    		image={require("./content/clarion.png")}
			    		title="Mobile App Design"
			    	/>
					<div className="project-details">
						<h2>Mobile App Design</h2><br/><br/>
						<p>Designed/ prototyped with Photoshop, Adobe XD</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">This was a project that I did for a make-a-thon. My goal was to simplify the decision users had to make when deciding how to travel anywhere.
						It helped me improve my prototyping skills and stretched my abilities using Adobe XD. The project also piqued my interest in REST APIs! Project coming soon! 
						</p>
					</div>
					<Thumbnail
			    		link="https://brentonjackson.github.io/tribute"
			    		image={require("./content/witcher-tribute.png")}
			    		title="Video Background Bio Page"
					/>
					<div className="project-details">
						<h2>Video Background Bio Page</h2><br/><br/>
						<p>HTML, CSS, JavaScript					</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">I made this project learning HTML and CSS. I played around with CSS frameworks like Bootstrap and W3.CSS.
						It also helped me grasp Responsive Design and more advanced CSS concepts.</p>
					</div>
				</div>
		    </div>
	  	)
	}
}
 
export default Projects;