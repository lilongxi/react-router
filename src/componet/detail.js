import React, {Component} from 'react';

class detail extends Component{
	
	render(){
		return (
			
			<div>
				detail : {this.props.match.params.id}
			</div>
			
		)
	}
	
}

export default detail