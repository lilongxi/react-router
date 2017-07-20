import React, {Component} from 'react';

class about extends Component{
	
	componentWillMount(){
		//pv
		console.log("您进入了此路由->onEnter")
		
	}
	
	componentWillUpdate(){
		console.log("您更改了此路由->onUpdate")
	}
	
	componentWillUnmount(){
		console.log("您离开了此路由->onLeave")
	}
	
	render(){
		return (
			
			<div>
				about
			</div>
			
		)
	}
	
}

export default about