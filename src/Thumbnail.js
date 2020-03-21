import React from 'react';
// import {Link} from 'react-router-dom';
import './content/styles.css'

class Thumbnail extends React.Component {
	render() {	
		return (
			<div className="project-container">
				<a className="project-tile" href={this.props.link}>
					<img className="project-image" src={this.props.image} alt="Project Image"/>
					<div className="project-title">{this.props.title}</div>
					<div className="project-description">{this.props.description}</div>
				</a>
			</div>
		);
	}
}

export default Thumbnail;