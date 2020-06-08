import React, { Component } from 'react';
import './Tasks.scss';

class Tasks extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		};
		this.myInput = React.createRef();
	}

	addTask(){
		let value = this.myInput.current.value
		this.setState({
			tasks: [...this.state.tasks, value]
		})
	}

	render() {
		return (
			<div className="Tasks">
				<h3>Tasks:</h3>
				<p>Make a Todo list (add only):</p>
				<input placeholder="Your task..." ref={this.myInput}/> <button onClick={this.addTask.bind(this)}>Add task</button>
				<ul>
					{this.state.tasks.map((task, index) => <li key={index}>{task}</li>)}
				</ul>
			</div>
		)
	}
}

export default Tasks;
