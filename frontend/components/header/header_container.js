import Header from "./header";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = state => {
    console.log(state)
    return{
        currentUser: state.session.currentUser
    }
}

const mDTP = (dispatch)=> ({
    logout: ()=> dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Header);