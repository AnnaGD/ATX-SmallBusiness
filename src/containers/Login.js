import { connect } from 'react-redux'
import Login from '../components/Login'
import { userLogin, authenticate } from '../redux/actions'

const mapStateToProps = (state) => {
    debugger
    return {
        user: state.user,
        listings: state.listings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: () => dispatch(userLogin()),
        authenticate: () => dispatch(authenticate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)