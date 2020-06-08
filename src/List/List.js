import React, { Component } from 'react';
import './List.scss';

class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
				'First item',
				'Second item',
				'Third item',
				'Fourth item'
			]
		};
	}

	render() {
		return (
			<div className="List">
				<h3>List:</h3>
				<p>Display a bullet point list of all the `items` in the state.</p>
				<ul>
					{this.state.items.map(item => <li>{item}</li>)}
				</ul>
			</div>
		)
	}
}

export default List;
