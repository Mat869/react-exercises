import React, { Component } from 'react';
import './President.scss';

class President extends Component {

	constructor(props) {
		super(props);
		this.state = {
			presidents: [
				{
					firstName: 'Bill',
					lastName: 'Clinton',
					image: 'bill.jpeg'
				},
				{
					firstName: 'George',
					lastName: 'Bush',
					image: 'george.jpeg'
				},
				{
					firstName: 'Barack',
					lastName: 'Obama',
					image: 'barack.jpeg'
				}
			],
			currentName: null
		};
	}

	showName(e) {
		let name = e.target.name
		this.setState({
			currentName: name
		});
	}

	render() {
		return (
			<div className="President">
				<p>When clicking on a president, display his <strong>full</strong> name below.</p>
				<div className="president-list">
					{this.state.presidents.map((president, index) => {
						return <img name={president.firstName + ' ' + president.lastName} 
							key={index} src={require('./images/' + president.image)} 
							alt="" 
							onClick={this.showName.bind(this)}/>
					})}
				</div>
				<div>
					<strong>You selected: </strong> {this.state.currentName}
				</div>
			</div>
		)
	}
}

export default President;
