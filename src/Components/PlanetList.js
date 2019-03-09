import React, { Component } from 'react';
import { Card } from '../Common/Card';
import axios from 'axios';



class PlanetList extends Component{

	state = {
		planets:[]
	}

	componentDidMount(){
		const {page} =  this.props.match.params
		axios.get(`https://swapi.co/api/planets/?page=${page}`)
			.then(({data}) =>{
				this.setState({planets:data.results})
			})
	}
	
	render(){
		const planets =  this.state.planets.map((planet,index) => (
			<div className="col-md-4" key={index}>
				<Card name={planet.name}>
					<ul>
						<li>Diameter: {planet.diameter}</li>
						<li>Climate: {planet.climate}</li>
						<li>Population: {planet.population}</li>
					</ul>
				</Card>

			</div>
		))


		return(
			<div className="row">
				{planets}
			</div>
		)
	}

}

export default PlanetList;