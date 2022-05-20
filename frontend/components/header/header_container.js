import Header from "./header";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

const mSTP = state => ({
})

const mDTP = (dispatch)=> ({
    logout: ()=> dispatch(logout())
});

export default connect(null, mDTP)(Header);