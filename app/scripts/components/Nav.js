import React from 'react';
import{Link} from 'AppRouter.js';
import Home from './HomeSearch.js';
import Votes from './BandVotedView.js';


const Nav = React.createClass({
 render: function(){
   return(
   <nav>
       <Link className="navlinks" to="/">Search for Bands</Link>  
       <Link className="navlinks" to="Votes">Votes</Link>
   </nav>)
 }
});



export default Nav;