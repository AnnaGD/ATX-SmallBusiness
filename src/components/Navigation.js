import React, { Component } from "react";
import Login from "./Login";
import { AppBar, Toolbar, IconButton, Typography, Button, Snackbar } from "@material-ui/core";
import { Redirect } from "react-router-dom";

class Navigation extends Component {
	state = {
		loggedIn: false,
		loggedOut: true
	}

	handleClick = () => {
		this.setState ({ loggedIn: true });
		console.log(this.state.loggedIn);
	};

	handleClickOut = () => {
		this.setState ({ loggedOut: false });
		console.log(this.stateloggedOut);
	};
}

render () {
	return this.state.loggedIn ? (
		<Redirect to={{pathname: "/login", state: { from: this.props.location }}} />
	) :(
		<AppBar className='navBar' position="relative">
			<Toolbar>
				<Typography className="asb" variant="h6" style={{ flexGrow: "1" }}>
				ATX Small Business
				</Typography>
				<ul className="nav-list">
					<Buttin className ="nav-list-item">
					Listings
					</Buttin>

					<Button
						className="nav-list-item"
						onClick={() => {
							if (!this.state.loggedIn) {
								this.handleClick();
							} else {
								this.handleClickOut ();
							}
						}} >
						{this.stateloggedIn ? "LOGOUT" : "Login"}
					</Button>
				</ul> 
			</Toolbar>
		</AppBar>
		);
	}

export default Navigation;

