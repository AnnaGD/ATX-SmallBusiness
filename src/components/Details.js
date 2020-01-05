import React from "react";
import {
	Container,
	Table,
	TableBody,
	TableHead,
	TableRow
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import GoogleMap from "../components/GoogleMap";

const Details = props => {
	console.log("props off history", props.history.location.state);
	const {
		Name,
		Description,
		Hours,
		Address,
		coordinates
	} = props.history.location.state;

	return (
		<Container maxWidth="sm" className="details-container">
			<Table>
				<TableBody>
					<TableRow className="name">{Name}</TableRow>
					<br />
					<TableRow className="Address">{Address}</TableRow>
					<br />
					<TableRow className="hours">{Hours}</TableRow>
					<br />
					<TableRow>{Description}</TableRow>
					<br />
					<GoogleMap coordinates={coordinates} />
				</TableBody>
			</Table>
		</Container>
	);
};

export default withRouter(Details);
