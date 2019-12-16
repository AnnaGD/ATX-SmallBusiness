import React from "react";
import { Switch, Route } from "react-router";
import Login from "./containers/Login";
import Listing from "./containers/Listing";
import Details from "./componnets/Details";
import AddListing from "./components/AddListing";


const Router = () => {
	return (
		<Switch>
			<Route path="/login" component={Login} />
			<Route exact path="/listing" component={Listing} />
			<Route path="/listing/:id" component={Details} />
			<Route path="/addlisting" component={AddListing} />
		</Switch>
	);
};

export default Router;
