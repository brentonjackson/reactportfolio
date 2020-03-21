import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
	render() {
		return (
			
				<nav id="navbar" className="nav">
			        <ul className="navbar-menu">
			            <li className="navbar-item">
			                <NavLink to="/">About</NavLink>
			                {/*<a href={About}>About</a>*/}
			            </li>
			            <li className="navbar-item">
			                <NavLink to="/projects">Projects</NavLink>
			            </li>
			            <li className="navbar-item">
			                <NavLink to="/contact">Contact</NavLink>
			            </li>
			        </ul>
			    </nav>
			    
		)
	}
}

