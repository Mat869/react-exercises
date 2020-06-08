import React, { Component } from 'react';
import './LastClick.scss';

class LastClick extends Component {

	constructor(props) {
		super(props);
		this.state = {
			num: 1
		};
		this.showNum = this.showNum.bind(this);
	}

	showNum(e) {
		let value = e.target.value
		console.log(value)
		this.setState({
			num: value
		})
	}

	render() {
		return (
			<div className="LastClick">
				<p>
					There are <b>3</b> buttons.<br />
					Make the box show the number of the last clicked button.
				</p>
				<div className="LastClick__buttons">
					<button value='1' onClick={this.showNum}>1</button>
					<button value='2' onClick={this.showNum}>2</button>
					<button value='3' onClick={this.showNum}>3</button>
				</div>
				<div className="LastClick__box">
					{this.state.num}
				</div>
			</div>
		)
	}
}

export default LastClick;
