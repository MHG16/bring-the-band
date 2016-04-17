import React from 'react';

const BandRow = React.createClass({
	render: function() {
		return (

			<section>
				<h2>name: {this.props.name}</h2>
				<div>Image: {this.props.image}</div>
				<button type='submit'>Vote</button>
			</section>

			)

	}

});


export default BandRow; 