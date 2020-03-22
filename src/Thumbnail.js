import React from 'react';

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
			<a onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} className={this.state.className + " project-tile bounceInLeft slower"} href={this.props.link}>
				<img className="project-image" src={this.props.image} alt="Project Image"/>
				<div className="project-title">{this.props.title}</div>
			</a>
		);
	}

	
}

export default Thumbnail;