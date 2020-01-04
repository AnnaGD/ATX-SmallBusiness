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
		name: '',
		description: '',
		hours: '',
		address: '',
	};
}

toggleDialog = () => this.setState ({ open: !this.state.open })

handleTextChange = (e) => {
	const newState = { ...this.state }
	newState[e.target.id] = e.target.value
	this.setState (newState)
}

handleSubmit = (e) => {
	e.preventDefault()
	const payload = { ...this.state }
	payload.id = this.props.listings +1
	delete payload.open
	console.log ("THE LIST", payload)
	this.props.addListing(payload)
	this.setState ({ open: false })
}

componentDidUpdate = (prevProps, prevState) => {
	if (prevState.open !== this.state.open) {
		this.setState ({
			name: '',
			description: '',
			hours: '',
			address: ''
		})
	}
}

render () {
	return (
		<Fragment>
			<div style = {{ textAlign: 'center'}}>
				<h1>Add Listing:</h1>
					<Button
						
			</div>
		</Fragment>

	)
}