import React from 'react';
import './thumbnail.css';

class Thumbnail extends React.Component {
	// add default state to animate transition
	constructor() {
	  	super();
	  	this.state = {className: "animated"};
	}

	// change state on mouseenter so css tranformation can take precedence
	mouseEnter = () => {
	    // console.log(this.state)
	    this.setState({className:""});
	}

	// re-add animate.css class when not hovering on element
	mouseLeave = () => {
	    // console.log(this.state)
	    this.setState({className: "animated"});
	}

	render() {	
		return (
			<a className={this.state.className + " project-tile "} onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} target="_blank" rel="noopener noreferrer" href={this.props.link}>
				<img className="project-image" alt="project" src={this.props.image}/>
				<div className="project-title">{this.props.title}</div>
			</a>
		);
	}

	
}

export default Thumbnail;