import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';
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
        </div>

    );
}

export default LoginPage