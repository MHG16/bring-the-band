// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import React from 'react';
import {render} from 'react-dom';
//import {Router, Route HashHistory, Link} from '.react-router';
import AppBanner from './components/AppBanner.js'
import Bands from './collections/BandCollection.js'


const BandSearch = React.createClass ({
	render: function () {
	return (
		<form className='bandsearch'>
			<input className='searchstring' type='text'/>
			<button className='btnsearch' type='submit'>Search</button>
		</form>
		)
	}
});




render(<AppBanner/>, document.querySelector('.app'));
render(<BandSearch/>, document.querySelector('.search'));

