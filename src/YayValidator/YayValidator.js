import React, { Component } from 'react';
import './YayValidator.scss';

class YayValidator extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isYay: false
		}
	}

	checkYay(e) {
		let value = e.target.value;
		if(value === 'yay') {
			this.setState({
				isYay: true
			})
		}
	}

	render() {
		return (
			<div className="YayValidator">
				<p>
					When the input contains the value "yay",
					change the input's background color to <span className="YayValidator__sample">green</span>:
				</p>
				<input type="text" className={!this.state.isYay ?  'textBox' : "YayValidator__sample"} onChange={this.checkYay.bind(this)}/>
			</div>
		)
	}
}

export default YayValidator;
