import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js'

export default class Navbar extends React.Component {
	render() {
		return (
			<Router>
				<nav id="navbar" className="nav">
			        <ul className="navbar-menu">
			            <li className="navbar-item">
			                <Link to="/">About</Link>
			                {/*<a href={About}>About</a>*/}
			            </li>
			            <li className="navbar-item">
			                <Link to="/projects">Projects</Link>
			            </li>
			            <li className="navbar-item">
			                <Link to="/contact">Contact</Link>
			            </li>
			        </ul>
			    </nav>
			    <Route path="/" exact component={About}/>
          		<Route path="/projects" exact component={Projects}/>
          		<Route path="/contact" exact component={Contact}/>
			</Router>
		)
	}
}

