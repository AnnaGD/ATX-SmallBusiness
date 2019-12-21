import React from 'react';
import logo from './logo.svg';
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import GoogleMap from './components/GoogleMap';
import Navigation from './containers/Navigation';
import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<div className ="App">
		<Navigation />
		<p>Welcome</p>
		<Login />
		<Dashboard />
		<GoogleMap />
		</div>
	
		<BrowserRouter>
		<Provider store={store}>
				<Router />
			</Provider>
		</BrowserRouter>
	);
}

export default App;
