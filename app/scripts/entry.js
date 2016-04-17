// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import React from 'react';
import {render} from 'react-dom';
//import {Router, Route HashHistory, Link} from '.react-router';
import AppBanner from './components/AppBanner.js'
import BandCollection from './collections/BandCollection.js'


const BandSearchView = React.createClass ({
	componentDidMount: function() {
	this.state.BandCollection.fetch();
	},

	getInitialState: function() {
		return {BandCollection: BandCollection}

	},

	addBand: function (e) {
		e.preventDefault();
		console.log(this);

	},

	render: function () {
		console.log(this);
	
	return (
		<form className='bandsearch' onSubmit={this.addBand}>
			<input className='searchstring' type='text'/>
			<button className='btnsearch' type='submit'>Search</button>
		</form>
		)
	}
});




render(<AppBanner/>, document.querySelector('.app'));
render(<BandSearchView/>, document.querySelector('.search'));

