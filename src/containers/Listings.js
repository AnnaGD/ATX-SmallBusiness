import { connect } from "react-redux";
import Listings from "../components/Listings";

const mapStateToProps = state => {
    // console.log (state)
    return {
        listings:  state.listings,
        user: state.user
    }
}

export default connect (mapStateToProps)(Listings)