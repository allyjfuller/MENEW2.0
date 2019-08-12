import React from 'react';
import LoginPage from '../Login/login-page';
//import RegisterPage from '../Register/register-page';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Nav.css';

export function Nav() {
		return(

			<nav>
				<ul className="nav">
					<li>Login</li>
					<li>Register</li>
				</ul>
			</nav>

	);

}


export default Nav