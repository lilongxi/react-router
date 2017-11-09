import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home.js';
import Product from './Prod';

const Home1 = () => (
	<div>
		Home1
	</div>
)

const Home2 = () => (
	<div>
		Home2
	</div>
)

const Home3 = () => (
	<div>
		Home3
	</div>
)

class Ex extends React.Component{
	render(){
		return (
			<Router>
			<div>
				<ul>
					<li><Link to="/">Home1</Link></li>
					<li><Link to="/home2">Home2</Link></li>
					<li><Link to="/home3">Home3</Link></li>
				</ul>
				<Switch>
				<Route exact={true} path="/" component={Home1} />
				<Route  path="/home2" component={Home} />
				<Route  path="/home3" component={Product} />
				</Switch>
			</div>
			</Router>
		)
	}
}


export default Ex;