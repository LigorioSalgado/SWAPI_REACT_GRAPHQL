import React, { Component } from 'react';
import payload from '../../payload';

const IS_AUTHENTICATED  = () => localStorage.getItem("swapi_token") !== null

class Navbar extends Component {

	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">SWAPI</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				{
					IS_AUTHENTICATED() ? (
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="/">Hola {payload().email} !!</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/people/1">ir People</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/planets/1">ir Planets</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/users">ir Users</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/logout">Logout</a>
							</li>
						</ul>

					):(
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="/">Home </a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/login">Login</a>
							</li>
						</ul>
					)



				}
				
				
				
				
			</div>
			</nav>
		)
	}
}

export default Navbar;