import React, { Component } from 'react';


class Card extends Component {


	render(){
		return(
			<div className="card" >
				<div className="card-body">
					<h5 className="card-title">{this.props.name}</h5>
					{this.props.children}
				</div>
			</div>
		)
	}


}

export default Card;