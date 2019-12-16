import React from "react";
import { AppBar, ToolBar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<AppBar position="relative">
			<ToolBar>
				<IconButton color="inherit">
					<MenuIcon />
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
			</ToolBar>
		</AppBar>
	);
};

export default Navigation;
