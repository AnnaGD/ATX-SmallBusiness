import React from "react";
import { Switch, Route } from "react-router";
import Login from "./components/Login";
import Listings from "./components/Listings";
import Details from "./componnets/Details";
import AddListings from "./components/AddListings";

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/" component={Listings} />
			<Route exact path="/" component={Details} />
			<Route exact path="/" component={AddListings} />
		</Switch>
	);
};

export default Router;
