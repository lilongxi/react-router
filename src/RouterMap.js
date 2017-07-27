import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'animate.css/animate.min.css';

import home from './componet/home';
import about from './componet/about';
import topic from './componet/topic';
import detail from './componet/detail';


class RouterMap extends Component{
	
	constructor(){
		super()
		this.state = {
			isAuthenticated: false
		}
	}

	render(){
		
		return (
			
			<Router history={this.props.histroy} >
				<div>
					<Route exact path='/' component={home} />
					<Route path='/about' component={about} />
					<Route path='/topic' history={this.props.histroy} component={topic} />
					<Route path='/detail/:id' component={detail}  />
				</div>
			</Router>
			
		)
	}
	
}

export default RouterMap;