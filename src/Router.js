import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from './containers/Login';
import Listings from './containers/Listings'
import Details from './components/Details'
import AddListing from './containers/AddListing'
import cookie from 'cookie'

const checkAuth = () => {
	const cookies = cookie.parse(document.cookie)
	return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = ({component: Component,...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
        ? <Component {...props} />
        : <Redirect to="/login" />}
        />
    )
}

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={Listings} />
			<Route path="/login" componenet={Login} />
			<Route path="/listing/:id" component={Details} />
			<ProtectedRoute path="/addlisting" component={AddListing} />
		</Switch>
	);
};

export default Router;
