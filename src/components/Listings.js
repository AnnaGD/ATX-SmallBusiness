import React from "react";
import {
	Container,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { withRouter } from "react-router-dom";
import AddListing from './AddListing'
// import styled from "styled-components";

// const StyledRow = styled(TableRow)`
// 	:hover {
// 		cusor: pointer;
// 	}
// `;
const Listings = props => {
	const rowClick = (e, listing) => {
		e.preventDefault();
		props.history.push({ pathname: `/listing/${listing.id}`, state: listing });
	};

	console.log("listings", props.listings);
	return (
		<Container maxWidth="lg" className="listings-container">
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Description</TableCell>
						<TableCell>Hours</TableCell>
						<TableCell>Address</TableCell>
						{props.user.user && <TableCell>Delete</TableCell>}
					</TableRow>
				</TableHead>
				<TableBody>
					{props.listings.map((listing, idx) => (
						<TableRow key={listing.id} onClick={e => rowClick(e, listing)}>
							<TableCell underline="hover">{listing["Name"]}</TableCell>
							<TableCell>{listing["Description"]}</TableCell>
							<TableCell>{listing["Hours"]}</TableCell>
							<TableCell>{listing["Address"]}</TableCell>
							<TableCell>
								{props.user.user && (
									<DeleteIcon
										onClick={() => props.removeLising(idx)}
										className="icon text-red"
									/>
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			{props.user.login && (
				<AddListing />
			)}
		</Container>
	);
};

export default withRouter(Listings);
