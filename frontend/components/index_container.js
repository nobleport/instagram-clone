import { connect } from "react-redux";
import { logout } from "../actions/session_actions";
import Index from './index'

const mSTP = state =>({

})

const mDTP = dispatch => ({
    signout: ()=>dispatch(logout())
}) 

export default connect(mSTP, mDTP)(Index)