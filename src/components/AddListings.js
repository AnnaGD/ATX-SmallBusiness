import React, { Component, Fragment } from "react";
import {
	Button,
	TextField,
	Dialog,
	DialogContent,
	DialogTitle
} from "@material-ui/core";

class AddListing extends Component {
	state = {
		open: true,
		name: "",
		description: "",
		hours: ""
	};
}
