import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
	
	constructor(props){
		super(props);
		this.state = {items:['hello','world','click','me']};
		this.handleAdd = this.handleAdd.bind(this);
	}
	
	handleAdd(){
		const newItems = this.state.items.concat([
			prompt('enter some text')
		]);
		this.setState({
			items: newItems
		})
	}
	
	handleRemove(i){
		const newItems = this.state.items.slice();
		newItems.splice(i,1);
		this.setState({
			items: newItems
		})
	}
	
	render(){
		const items = this.state.items.map((item, index) => (
			<div key={index} onClick = {() => this.handleRemove(index)}>
				{item}
			</div>
		));
		
		return (
			<div>
				<button onClick = {this.handleAdd}> Add Item </button>
				<ReactCSSTransitionGroup 
					  transitionName="example"
				      transitionAppear={true}
				      transitionAppearTimeout={500}
				      transitionEnterTimeout={500}
          			  transitionLeaveTimeout={300}
				>
					{items}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

export default about