import React, { Component } from 'react';
import './SmartParagraph.scss';

class SmartParagraph extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isShown: true,
			text: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of great explorers.'
		};
	}

	toggle() {
		this.setState({
			isShown: !this.state.isShown
		})
	}

	showShortText() {
		let index = this.state.text.lastIndexOf(' ', 100);
		return this.state.text.slice(0, index);
	}

	render() {
		return (
			<div className="SmartParagraph">
				<p className="SmartParagraph__explanation">
					When clicking on "Toggle" button,
					the following paragraph should display only 100 characters.
					The challenge is cutting between words!
					Clicking again should show all of the text back.
				</p>
				<p className="SmartParagraph__value">
					{this.state.isShown ? this.state.text : this.showShortText()}
				</p>
				<button onClick={this.toggle.bind(this)}>Toggle</button>
			</div>
		)
	}
}

export default SmartParagraph;
