// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import React from 'react';
import {render} from 'react-dom';
//import {Router, Route HashHistory, Link} from '.react-router';
import AppBanner from './components/AppBanner.js';
import BandRow from './components/BandRow.js'; 
import $ from 'jquery';

const BandSearchView = React.createClass ({
	
	getInitialState: function () {
	  	console.log('getInitialState');
	  	console.log(this);
	  	this.setState({data: []});
		return {data: data};
	 },

	searchBand: function (e) {
		e.preventDefault();
		let url = 'https://api.spotify.com/v1/search?q='+ this.refs.search.value + '&type=artist';
		console.log(url);


		const getBand = {
			type: 'GET',
			url: url,  

			success: (data) => {
					this.setState({
						bandName: data
					});
				

					this.state.data.map(function(val, i, arr) {

					console.log('im in success');
					let bandName = data.artists.items[0].name;
					let bandImage = data.artists.items[0].images[0].url;  

					console.log(bandName);
					console.log(bandImage);


				}	

			)},

			error: function(err) {
				console.log(err);  
			},

			complete: function() {
				console.log('I got a response');
			},

			
		}
		$.ajax(getBand);
	},


	render: function () {
		console.log(this);
		
		let bandList = this.state.data.map(function (value, index, array) {
			
			return <BandRow name={value.get('bandName')} image={value.get('bandImage')} />


		});


		return (
			<section>
			<form className='bandsearch' onSubmit={this.searchBand}>
				<h2 className='instructions'>Please enter an artist to search</h2>
				<input className='searchstring' type='text' ref='search'/>
				<button className='btnsearch' type='submit'>Search</button>
			</form>
				{bandList}
			</section> 
		)
	}
});


//render(<bandList />, document.querySelector('.search')); 
render(<BandSearchView />, document.querySelector('.results'));

