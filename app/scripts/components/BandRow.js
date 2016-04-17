import React from 'react';

const BandRow = React.createClass({
	render: function() {
		return (

			<section>
				<h2>name: {this.props.name}</h2>
				<div>Image: {this.props.image}</div>
			</section>

			)

	}

});


export default BandRow; 