import React, { Component } from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {Card} from '../Common/Card'


const ALLUSERS = gql`

	{
		Users{
			_id,
			first_name,
			last_name,
			gender
		}

	}

`


class ListUsers extends Component{



	render(){

		return(
		<div className="row">
			<Query query={ALLUSERS}>
				{
					({data,error,loading}) => {
						if(error) return <h4>Hubo un error</h4>
						if(loading) return <h4>Loading...</h4>

						return data.Users.map((user,index) => (
							<div className="col-md-4" key={index}>
								<Card name={`${user.first_name} ${user.last_name}`} >
									<ul>
										<li>ID:{user._id} </li>
										<li>gender:{user.gender}</li>
									</ul>
								</Card>
							</div>
						))

					}
				}
			
			</Query>
		</div>
		)

	}


}

export default ListUsers;