import Backbone from 'backbone';

const BandModel = Backbone.Model.extend({
	defaults: {
		bandname: '',
		image: '',
	},

	rootUrl: 'https://api.spotify.com/v1/search?q=sting&type=artist'

});


export default BandModel; 