import { connect } from 'react-redux'
import Login from '../components/Login'
import { userLogin, authenticate } from '../redux/actions'
import { connect } from 'tls';

const mapStateToProps = (state) => {
    return {
        listings: state.listings, 
        user: state.user,
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (user) => dispatch(userLogin(user)),
        authenticate: () => dispatch(authenticate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)