import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			time: 0
		}
	}
	
	start() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	tick() {
		this.setState({
			time: this.state.time + 1
		});
	}

	stop(){
		clearInterval(this.timerID);
	}

	reset(){
		this.setState({
			time: 0
		});
	}
	render() {
		return (
			<div className="Timer">
				<h3>Timer</h3>
				<ul className="Timer__explanation">
					<li><b>Play:</b> the timer should count the seconds and keep updating</li>
					<li><b>Pause:</b> the timer freeze the timer</li>
					<li><b>Reset:</b> should set the timer to 0</li>
				</ul>
				<div className="Timer__actions">
					<button onClick={this.start.bind(this)}>Play</button>
					<button onClick={this.stop.bind(this)}>Pause</button>
					<button onClick={this.reset.bind(this)}>Reset</button>
				</div>
		<div className="Timer__value">{this.state.time}</div>
			</div>
		)
	}
}

export default Timer;
