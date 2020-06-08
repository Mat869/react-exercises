import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {

	constructor(props) {
		super(props);
		this.state = {
			days: [],
			hottest: null,
			coldest: null
		};
	}
	showHottest(){
		let hottestDay = 0;
		this.state.days.forEach(day => {
			if(day.temperature > hottestDay) {
				hottestDay = day.temperature
			}
		});
		this.setState({
			hottest: hottestDay
		})
	}
	showColdest(){
		let coldestDay = 0;
		this.state.days.forEach(day => {
			if(day.temperature < coldestDay) {
				coldestDay = day.temperature
			}
		});
		this.setState({
			coldest: coldestDay
		})
	}

	componentDidMount() {
		fetch('https://my-json-server.typicode.com/evyros/react-weather-app/forecast')
			.then(data => data.json())
			.then(days => {
				this.setState({days})
			})
			.then(this.showHottest.bind(this))
			.then(this.showColdest.bind(this))
			
	}

	

	render() {
		return (
			<div className="Weather">
				<p>
					Use the following API to display the hottest and coldest days:<br />
					<code>https://my-json-server.typicode.com/evyros/react-weather-app/forecast</code>
				</p>
				<div className="Weather__stats">
					<strong>Hottest day is:</strong>  {this.state.hottest}
				</div>
				<div className="Weather__stats">
					<strong>Coldest day is:</strong> {this.state.coldest}
				</div>
			</div>
		)
	}
}

export default Weather;
