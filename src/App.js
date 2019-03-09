import React, { Component } from 'react';
import {Route,BrowserRouter as Router, Redirect} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo'; 
import client from './Graphql';
import './App.css';
import {Navbar} from './Common/Navbar';
import CharacterList from './Components/CharacterList';
import PlanetList from './Components/PlanetList';
import ListUsers from './Components/ListUsers';
import Login from './Components/Login';

const IS_AUTHENTICATED  = () => localStorage.getItem("swapi_token") !== null


const Logout = () => {
	localStorage.removeItem("swapi_token");
	return <Redirect to="/" />
}


const PrivateRoute = ({component:Component,...rest}) => (
	<Route {...rest} render={
		(props) => (
			IS_AUTHENTICATED()  ? <Component {...props}/> : <Redirect to="/login"/>
		)
	} ></Route>


)

class App extends Component {
  render() {
    return (
	<ApolloProvider client={client}>
      <div className="App"> 

		<Router>
		 <React.Fragment>
		 	<Navbar/>
			<Route exact path="/" component={() => (<h2>¡Bienvenido react swapi!</h2>)} />
			<PrivateRoute exact path="/people/:page" component={CharacterList}/>
			<PrivateRoute exact path="/planets/:page" component={PlanetList}/>
			<Route exact path="/login" component={Login}></Route>
			<PrivateRoute exact path="/users" component={ListUsers} ></PrivateRoute>
			<PrivateRoute exact path="/logout" component={Logout}></PrivateRoute>
		 </React.Fragment>
		</Router>
      </div>
	</ApolloProvider>
    );
  }
}

export default App;
