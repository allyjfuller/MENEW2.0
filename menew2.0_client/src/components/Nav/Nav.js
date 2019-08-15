import React from 'react';
import LoginPage from '../Login/login-page';
import Header from '../Header/Header';
import App from '../App/App';
import LogOut from '../Login/logout';
import RegistrationPage from '../Register/registration-page';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Nav.css';

export class Nav extends React.Component {
	constructor(props) {
		super()
		this.state={};
	}

	render() {
		return(

		<Router>

			<nav>
				<ul className="nav">
					{!this.props.loggedIn ?
						<div>
						<Link to="/login" className="login"><li>Login</li></Link>
						</div>
						:
						null
					}
					<li>
					<LogOut />
					</li>
					<li>
					<Link to="/register" className="register">Register</Link>
					</li>
				</ul>
			</nav>

			<Link to="/" className="logo"><Header /></Link>

			<Route exact path="/" component={ App } />
			<Route path="/register" component={ RegistrationPage } />
			<Route path="/login" component={ LoginPage } />

			
		</Router>

		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});



export default connect(mapStateToProps)(Nav);
