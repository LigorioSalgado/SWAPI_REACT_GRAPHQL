import React, { Component } from 'react';
import axios from 'axios';
import { Card } from '../Common/Card';


class CharacterList extends Component{

	state = {
		people:[]
	}

	componentDidMount(){
		const {page} = this.props.match.params
		axios.get(`https://swapi.co/api/people/?page=${page}`)
			.then(({data}) => {
				this.setState({people:data.results})
		});
	}

	render(){

		const people = this.state.people.map((character,index) => (
		 <div className="col-md-4" key={index} >
			<Card name={character.name} >
				<ul>
					<li>Mass: {character.mass}</li>
					<li>height: {character.height}</li>
					<li>Birth Year:{character.birth_year} </li>
				</ul>
			</Card>
		</div>	
		))

		return(

			<div className="row">

			{people}

			</div>

		)
	}


}

export default CharacterList;