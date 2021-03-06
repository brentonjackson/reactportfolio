import React from 'react';
import { motion } from "framer-motion"
import Thumbnail from './Thumbnail.js';
import './projects.css'

const containerVariants = {
	exit: {
	  x: '-100vw',
	  opacity: 0,
	  transition: { ease: "easeInOut", duration: 3 }
	}
  }

const headerVariants = {
	hidden: {
		x: '150vw'
	},
	visible: {
		x: 0,
		transition: {
		type: "spring", stiffness: 80, duration: 5, delay: 0.58
		}
	}
}

const subheadVariants = {
	hidden: {
		x: '150vw'
	},
	visible: {
		x: 0,
		transition: {
		type: "spring", stiffness: 80, duration: 5, delay: 0.5
		}
	}
}

class Projects extends React.Component {
	render() {  
		return (
		    <motion.div className = "projects" variants={containerVariants} exit="exit">
		    	<motion.h2 className="project-header"
					variants={headerVariants}
					initial="hidden"
					animate="visible"
				>
					Recent Projects</motion.h2>
		    	
				<motion.div 
					variants={subheadVariants}
					initial="hidden"
            		animate="visible"
					className="project-container">
			    	<Thumbnail
			    		link="https://flamboyant-golick-e73a92.netlify.app/"
			    		image={require("./content/wip.png")}
			    		title="Workout App"
			    	/>
					<div 
						className="project-details slideInRight slow">
						<h2>Workout App</h2><br/><br/>
						<p>React (Class based), Node, MongoDB, Express</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">Full-stack app that tracks your workouts. Hub for keeping workouts
						centralized for all of you that currently use a notepad (me) or your phone notes app (also me). Newer version in progress. Deployed on Netlify and Heroku.
						</p>
					</div>

			    	<Thumbnail
			    		link="https://musing-mclean-fefe4c.netlify.app/"
			    		image={require("./content/fitnessgram.png")}
			    		title="FitnessGram"
			    	/>
					<div 
						className="project-details slideInRight slow">
						<h2>Fitness Motivation Site</h2><br/><br/>
						<p>JavaScript, HTML, CSS</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">Responsive site to display images. Built as a hub to motivate users while working out - as a reminder that giving
						just a little bit more effort is always worth it. Conceived as part of a larger fitness project I'm working on.
						Uses Flexbox for responsiveness and JS for click events.
						</p>
					</div>

					<Thumbnail
			    		link="https://savagelashesatl.com"
			    		image={require("./content/savagelashesatl.png")}
			    		title="SavageLashesATL"
			    	/>
					<div 
						className="project-details slideInRight slow">
						<h2>Freelance: Lash Site</h2><br/><br/>
						<p>JavaScript, HTML, CSS</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">This client needed a website for her lash business. I designed and built the site from scratch, and since most of her following and business
						is on Instagram, I implemented an Instagram widget that displays her posts as a photo gallery. For payments, she set up a Square account and I linked
						everything there. That way, she could download the Square app and keep track of her appointments and payments.
						</p>
					</div>

					<Thumbnail
			    		link="https://hope2learn.com"
			    		image={require("./content/hope2learn.png")}
			    		title="Hope2Learn"
			    	/>
					<div 
						className="project-details slideInRight slow">
						<h2>Freelance: Homeschool / Tutoring Site</h2><br/><br/>
						<p>WordPress, CSS</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">This client wanted a website to start her teaching and tutoring business. I used WordPress to design the site and implemented Square for payments. WordPress plugins
						that made this easier was WooCommerce and Essential Addons (which is very well designed and makes me eager to use WP again so I can use it!) We opted to go
						with Square instead of a WP plugin for payments because a Square account is free for single users/businesses. I'll have to explore other alternatives the next time I'm using WP.
						</p>
					</div>

					{/* <Thumbnail
			    		link="https://brentonjackson.github.io/vower"
			    		image={require("./content/vower.png")}
			    		title="Landing Page Redesign"
					/>
					<div 
						className="project-details slideInRight slow">
						<h2>Landing Page Redesign</h2><br/><br/>
						<p>HTML, CSS, JavaScript, jQuery, Animate.css</p><br /><br/>
						<h3>Summary</h3>
						<p className="summary">Improved the UI and overall experience (UX) of a startup's landing page. <br/>
							Used animations to keep the attention of a younger target audience, gradients to help with visual hierarchy, 
							and reduced distraction of the user by being minimal in my design approach. <br/>
							Presenting to an actual client made me cognizant about the
							presentation of my work and improved my mockup skills. My client loved the end result!</p>
					</div> */}
				
					<Thumbnail
			    		link="https://focused-mirzakhani-648ad8.netlify.app/"
			    		image={require("./content/mj.png")}
			    		title="Dynamic Bio Page"
					/>
					<div 
						className="project-details slideInRight slow">
						<h2>Dynamic Bio Page</h2><br/><br/>
						<p>HTML, CSS, JavaScript</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">
							Alternative to a static bio page. This dynamic page allows users to get a better feel of the subject.
							Used W3CSS to explore and compare to Bootstrap.
						</p>
					</div>

			    	<Thumbnail
			    		link="https://github.com/brentonjackson/Flashcard-Android-App"
			    		image={require("./content/flashcard.png")}
			    		title="Mobile App Development"
			    	/>
					<div 
						className="project-details slideInRight slow">
						<h2>Mobile App Development</h2><br/><br/>
						<p>Java, Android Studio, SQL</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">Built app to create, edit, and delete flashcards. Uses SQL to save content in a database. Perfect for studying. Click the picture to download the Android app from my Github and try it out! 
						</p>
					</div>

					<Thumbnail
			    		link="https://github.com/brentonjackson/clarion"
			    		image={require("./content/clarion.png")}
			    		title="Mobile App Design"
			    	/>
					<div 
						className="project-details slideInRight slow">
						<h2>Mobile App Design</h2><br/><br/>
						<p>Designed/ prototyped with Photoshop, Adobe XD</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">Goal: To simplify the decision users had to make when deciding how to travel anywhere.
						This helped me improve my prototyping skills and stretched my abilities using Adobe XD. Also piqued my interest in REST APIs 
						</p>
					</div>

					<Thumbnail
			    		link="https://brentonjackson.me"
			    		image={require("./content/react-portfolio.png")}
			    		title="Portfolio Website"
					/>
					<div 
						className="project-details slideInRight slow">
						<h2>Portfolio Website</h2><br/><br/>
						<p>React, HTML, CSS, JavaScript, jQuery, Animate.css</p><br /><br/>
						<h3>Summary</h3>
						<p className="summary">Refactored portfolio in React. 
							I learned how to create React apps from scratch as well as refactor pre-existing HTML sites. Also learned a lot about deployment while doing this.
						</p>
					</div>

					<Thumbnail
			    		link="https://pensive-brahmagupta-d6741d.netlify.com/"
			    		image={require("./content/tictactoe.PNG")}
			    		title="ReactJS Game"
			    	/>
					<div 
						className="project-details slideInRight slow">
						<h2>ReactJS Game</h2><br/><br/>
						<p>React, JavaScript, StyledComponents</p><br/><br/>
						<h3>Summary</h3>
						<p className="summary">Built a Tic-Tac-Toe game in React. First project getting familiar with React concepts like state, props, and lifecycle methods -
						as well as using other libraries in the React ecosystem instead of just relying on JavaScript, HTML, and CSS solutions.
						Try it out! 
						</p>
					</div>
				</motion.div>
		    </motion.div>
	  	)
	}
}
 
export default Projects;