import React, { Component } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	SnackbarContent
} from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = (props) => {

	// switchClick = () => {
	// 	console.log("lfse", props);
	// 	if (this.props.login) {
	// 		this.props.authenticate(null, true);
	// 	} else {
	// 		this.props.authenticate(null, false);
	// 	}
	// };

		console.log("props-nav", props);
		console.log("user", props.user.user);
		console.log("login", props.login);
		return (
			<div>
				<AppBar
					position="relative"
					style={{ background: "#3CB371", height: 75 }}
				>
					<Toolbar>
						<Typography variant="h6" style={{ flexGrow: "1" }}>
							ATX Small Businesses
						</Typography>
						<ul className="nav-list">
							<li className="nav-list-item">
								<Link to="/listing">Listings</Link>
							</li>
							<li className="nav-list-item">
								<Link to="/addlisting">Add Listing</Link>
							</li>
							<li className="nav-list-item">
								<Link to="/Login">
									{props.user.user ? "Logout" : "Login"}
								</Link>
							</li>
						</ul>
					</Toolbar>
				</AppBar>
				<SnackbarContent
					message={
						props.user.user
							? `Logged in as: ${props.user.username}`
							: "Please Login"
					}
				/>
			</div>
		);
	}

const mapStateToProps = state => ({
	login: state.authentication.login
});

export default connect(
	mapStateToProps,
	null
)(Navigation);
