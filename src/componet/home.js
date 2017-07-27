import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import 'animate.css/animate.min.css';

class home extends Component{
	
	render(){
		return (
			
			<div>
				<ul>
			        <li><NavLink activeClassName="selected" to="/">Home</NavLink></li>
			        <li><NavLink activeClassName="selected" to="/about">About</NavLink></li>
			        <li><NavLink activeClassName="selected" to="/topic">Topics</NavLink></li>
			    </ul>
			</div>
			
		)
	}
	
}

export default home