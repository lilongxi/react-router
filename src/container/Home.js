import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

const detail = ({match}) => {
	console.log(match)
	return (
		<div>
			<h3>{match.params.name}</h3>
		</div>
	)
}

const Home = ({match}) => {
	return (
		<div>
			<ul>
				<li><Link to={`${match.url}/shoes`}>shoes</Link></li>
				<li><Link to={`${match.url}/boots`}>boots</Link></li>
				<li><Link to={`${match.url}/footware`}>footware</Link></li>
			</ul>
			<Route path={`${match.path}/:id`} component={detail} />
		</div>
	)
}


export default Home