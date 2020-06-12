import React from 'react';
import './footer.css'


export default class Footer extends React.Component {
	render() {
		return (
		    <section className="foot">
		        <p>© Brenton Jackson <a href="https://github.com/brentonjackson/" className="github-link" target="_blank" rel="noopener noreferrer">
		        <i className="fab fa-github github-icon fa-lg"></i></a></p>
		    </section>

		)
	}
}

