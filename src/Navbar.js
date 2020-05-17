import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import Burger from './Burger';
import Menu from './Menu';
import resume from "./content/Brenton-Jackson-resume.pdf";


function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<div>
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
			</nav>
			<Burger open={open} setOpen={setOpen} />
			<Menu open={open} setOpen={setOpen}/>
			
			
		</div>
			
	)
}

export default Navbar;

