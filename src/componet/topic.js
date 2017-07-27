import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
//import createHashHistory from 'history/createHashHistory'
//const history = createHashHistory();

class topic extends Component{
	
	handleClick(value){
		this.props.history.push('/detail/' + value)
	}
	
	render(){
		const arr = [1,3,6]
		return (
			
			<div>
				<h2>topic</h2>
				{
					arr.map((item, index) => {
						return <p key={index} ><NavLink to={{pathname:'/detail/' + item}}>Link jump to {item}</NavLink></p>
					})
				}
				------------------------
				{
					arr.map((item, index) => {
						return <p key={index} onClick={this.handleClick.bind(this, item)}>JS jump to {item}</p>
					})
				}
			</div>
			
		)
	}
	
}

export default topic