import Backbone from 'backbone';
import BandModel from './models/BandModel.js'

const BandCollection = Backbone.Collection.extend({
	model: BandModel,
	url: 'https://api.spotify.com/v1/search?type=artist'


});

//instantiate the collection

let Bands = new BandCollection();

export default Bands;   
