import React from 'react';
import{Router, Route, hashHistory, Link} from 'react-router';
import Home from './BandSearchView.js';
import Votes from './BandVotedView.js';

const router = (
 	<Router history={hashHistory}>
  	 <Route path="/" component={Home}/>
  	 <Route path="/votes" component={Votes}/>
 	</Router>  
)





export default AppRouter;   