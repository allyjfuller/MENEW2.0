import React from 'react';
import {connect} from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import './login-page.css';
//import LandingPage from './landing-page';
//import App from './App';

export function LoginPage(props) {
	// If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    
    //if (props.loggedIn) {
        //return <Redirect to="/dashboard" component={ Dashboard } />;
    //}

    return (
    	<div>
            <LoginForm />
            <p>Not a member yet? <Link to="/register">Register</Link></p>
        </div>

    );
}

export default LoginPage