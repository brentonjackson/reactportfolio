import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'

export default class Navbar extends React.Component {
	render() {
		return (
			
				<nav id="navbar" className="nav">
			        <ul className="navbar-menu">
			            <li className="navbar-item">
			                <NavLink to="/" exact activeStyle = {{background: 'var(--navbar)', color: 'var(--accent-color'}}>Home</NavLink>
			                {/*<a href={About}>About</a>*/}
			            </li>
			            <li className="navbar-item">
			                <NavLink to="/projects" activeStyle = {{background: 'var(--navbar)', color: 'var(--accent-color'}}>Projects</NavLink>
			            </li>
			            <li className="navbar-item">
			                <NavLink to="/contact" activeStyle = {{background: 'var(--navbar)', color: 'var(--accent-color'}}>Contact</NavLink>
			            </li>
			        </ul>
			    </nav>
			    
		)
	}
}

