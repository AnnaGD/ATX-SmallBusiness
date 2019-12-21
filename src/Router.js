import React from "react";
import { Switch, Route } from "react-router";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import cookie from 'cookie'
import { Redirect } from 'react-router-dom'


const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={Dashboard} />
			<Route path="/login" componenet={Login} />
			<Route path="/dashboard" component={Dashboard} />
		</Switch>
	);
};

export default Router;
