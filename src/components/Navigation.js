import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
// import MenuIcon from "@material-ui/styles/ServerStyleSheets/index";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<AppBar position="relative">
			<Toolbar>
				<IconButton color="inherit">
					
				</IconButton>
				<Typography variant="h6" style={{ flexGrow: "1" }}>
					ATX Small Bussiness
				</Typography>
				<ul className="nav-list">
					<li className="nav-list-item">
						<Link to="/">Log In</Link>
					</li>
					<li className="nav-list-item">
						<Link to="/Listings">Listings</Link>
					</li>
				</ul>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
