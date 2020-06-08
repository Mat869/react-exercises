import React, { Component } from 'react';
import './RandomNumber.scss';

class RandomNumber extends Component {

	constructor(props) {
		super(props);
		this.state = {
			num: 0
		}
	}

	generateRandom() {
		this.setState({
			num: Math.round(Math.random() * 100)
		})
	}

	render() {
		return (
			<div className="RandomNumber">
				<p className="RandomNumber__explanation">
					When clicking on the button, make a random number (between 1-100) to appear in the box.
				</p>

				<button onClick={this.generateRandom.bind(this)}>Generate number!</button>
				<div className="box">
					{this.state.num}
				</div>
			</div>
		)
	}
}

export default RandomNumber;
