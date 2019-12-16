import { connect } from "react-redux";
import Navigation from "../componnents/Navigation";
import { userLogin, authenticate } from "../redux/actions";

const mapStateToProps = state => {
	return {
		user: state.user,
		login: state.login
	};
};

const mapDispatchToProps = dispatch => {
	return {
		userLogin: username => dispatch(userLogin(username)),
		uthenticate: () => dispatch(authenticate())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
