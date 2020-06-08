import React, { Component } from 'react';
import logo from './logo.svg';
import './Blob.scss';

class Blob extends Component {
	
	render() {
		return (
			<div className="Blob">
				Add a `showLogo` prop into the `Blob` component that determines whether or not to display the logo.<br />
				{this.props.showLogo ? <img src={logo} className="Blob__logo" alt="logo" /> : null}
			</div>
		)
	}
}

export default Blob;
