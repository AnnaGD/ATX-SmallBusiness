import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { Button, TextField, Container } from "@material-ui/core";
// import { render } from '';

class Login extends PureComponent {
	state = {
		username: "",
		password: ""
	};

	onTextChnage = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	login = e => {
		const newUser = {
			username: this.state.username,
			password: this.state.password
		};

		e.preventDefault();
		document.cookie = "loggedIn = true; max-age = 60*1000";
		console.log("Props-login:", this.props);
		this.props.userLogin(newUser);
		this.props.authenticate();
		this.porps.history.push("/listing");
	};

	render() {
		return (
			<div className="login-form">
				<Container maxWidth="sm">
					<form onSubmit={this.login}>
						<TextField
							className="username"
							onChange={this.onTextChange}
							value={this.state.username}
							name="username"
							label="Username"
							required
							type="text"
						/>
						<br />
						<TextField
							className="password"
							onChange={this.onTextChange}
							value={this.state.password}
							name="password"
							lable="Password"
							type="password"
							required
						/>
						<br />
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className="login-button"
						>
							Login
						</Button>
					</form>
				</Container>
			</div>
		);
	}
}

export default withRouter(Login);

