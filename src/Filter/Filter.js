import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
				'Big fox',
				'Small elephant',
				'Big ant',
				'Small dinosaur',
				'Medium dog'
			],
			filteredItems: null
		};
		this.renderItemsList = this.renderItemsList.bind(this);
		this.myInput = React.createRef();
	}

	search() {
		let toCheck = this.myInput.current.value;
		let checkedItems = this.state.items.filter(item => item.includes(toCheck));
		this.setState({
			filteredItems: checkedItems
		});
	}

	renderItemsList(items) {
		return items.map((item, index) => {
			return <li key={index}>{item}</li>;
		})
	}

	render() {
		return (
			<div className="Filter">
				<p>Filter the list as you type.</p>
				<input placeholder="Search..." className="Filter__textbox" onChange={this.search.bind(this)} ref={this.myInput} />
				<ul>
					{this.state.filteredItems === null ? this.renderItemsList(this.state.items) : this.renderItemsList(this.state.filteredItems)}
				</ul>
			</div>
		)
	}
}

export default Filter;
