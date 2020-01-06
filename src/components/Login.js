import React from "react";
import { Button, TextField, Container } from "@material-ui/core";
// import { render } from '';
import { Link } from "react-router-dom";

const Login = (props) => {
debugger
	return (
		<div className="App">
		Hiiiiii
			<Container maxWidth="sm">
				<form
					className="login-form"
					// onSubmit={this.login}>
				>
					<TextField
						required
						// onChange={this.handleTextChange}
						// value={this.state.username}
						name="username"
						label="Username"
						type="text"
					/>
					<TextField
						required
						name="password"
						label="Password"
						type="password"
					/>
					<Link to={"/"}>
						<Button
							type="submit"
							className="login-button"
							variant="contained"
							color="primary"
							onClick={() => props.userLogin()}
						>
							Login
						</Button>
					</Link>
				</form>
			</Container>
		</div>
	);
};

export default Login;
