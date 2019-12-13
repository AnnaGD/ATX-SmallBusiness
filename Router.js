import React from "react";
import { Switch, Route } from "react-router";
import LogIn from "./components/LogIn";
import Listings from "./components/Listings";

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={LogIn} />
			<Route exact path="/" component={Listings} />
		</Switch>
	);
};

export default Router;
