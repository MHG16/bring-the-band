import React from 'react';

const BandRow = React.createClass({
	render: function() {
		return (

			<section>
				<h2>name: {this.state.name}</h2>
				<div>Image: {this.state.image}</div>
				<button type='submit'>Vote</button>
			</section>

			)

	}

});


export default BandRow; 