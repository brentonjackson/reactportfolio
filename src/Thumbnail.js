import React from 'react';

class Thumbnail extends React.Component {
	render() {	
		return (
			<div className="project-container">
				<a className="project-tile animated bounceInLeft slower" href={this.props.link}>
					<img className="project-image" src={this.props.image} alt="Project Image"/>
					<div className="project-title">{this.props.title}</div>
				</a>
			</div>
		);
	}
}

export default Thumbnail;