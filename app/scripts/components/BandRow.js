import React from 'react';

const BandRow = React.createClass({
	render: function() {
		return (

			<section>
				<h2>Name:{this.props.name}</h2>
	
				<button type='submit'>Vote</button>
			</section>

			)

	}

});


export default BandRow; 