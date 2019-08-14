import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './components/Nav/Nav';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import store from './store'
import './index.css';

ReactDOM.render(

<Provider store={store}>

	<Router>

		<Nav />
		<App />

	</Router>

</Provider>




, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
