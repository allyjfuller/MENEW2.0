import React from 'react';
//import LoginPage from '../Login/login-page';
import Header from '../Header/Header';
import App from '../App/App';
import RegistrationPage from '../Register/registration-page';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Nav.css';

export function Nav() {
		return(

		<Router>

			<nav>
				<ul className="nav">
					<li>Login</li>
					<li>
					<Link to="/register" className="register">Register</Link>
					</li>
				</ul>
			</nav>

			<Link to="/" className="logo"><Header /></Link>

			<Route exact path="/" component={ App } />
			<Route path="/register" component={ RegistrationPage } />

			
		</Router>

	);

}


export default Nav