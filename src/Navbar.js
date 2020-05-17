import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import resume from "./content/Brenton-Jackson-resume.pdf";


export default class Navbar extends React.Component {
	render() {
		return (
			
				<nav id="navbar" className="nav">
			        <ul className="navbar-menu">
			            <li className="navbar-item">
			                <NavLink to="/" className="nav-link" exact >Home</NavLink>
			            </li>
			            <li className="navbar-item">
			                <NavLink to="/projects" className="nav-link" >Projects</NavLink>
			            </li>
						<li className="navbar-item">
						<a href={resume} id="resume_link" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
			            </li>
			            <li className="navbar-item">
			                <NavLink to="/contact" className="nav-link" >Contact</NavLink>
			            </li>
			        </ul>
					<ul className="navbar-menu">
						<li></li>
					</ul>
			    </nav>
			    
		)
	}
}

