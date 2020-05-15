import React from 'react';
import './footer.css'


export default class Footer extends React.Component {
	render() {
		return (
		    <section className="foot">
		        <p>Created by Brenton Jackson <a href="https://github.com/brentonjackson/reactportfolio" className="github-link" target="_blank" rel="noopener noreferrer">
		        <i className="fab fa-github github-icon fa-lg"></i></a></p>
		    </section>

		)
	}
}

