import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'

export default class Navbar extends React.Component {
	render() {
		return (
			
				<nav id="navbar" className="nav">
			        <ul className="navbar-menu">
			            <li className="navbar-item">
			                <NavLink to="/" className="nav-link" exact >Home</NavLink>
			                {/*<a href={About}>About</a>*/}
			            </li>
			            <li className="navbar-item">
			                <NavLink to="/projects" className="nav-link" >Projects</NavLink>
			            </li>
			            <li className="navbar-item">
			                <NavLink to="/contact" className="nav-link" >Contact</NavLink>
			            </li>
			        </ul>
			    </nav>
			    
		)
	}
}

