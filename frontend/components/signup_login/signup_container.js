import { connect } from "react-redux";
import { signup, login, resetErrors } from  "../../actions/session_actions";
import Signup from "./signup";

const mSTP = state => ({
    errors: state.errors
})

const mDTP = (dispatch)=> ({
    signup: (formUser) => dispatch(signup(formUser)),
    login: (formUser) => dispatch(login(formUser)),
    resetErrors: ()=> dispatch(resetErrors())
});

export default connect(mSTP, mDTP)(Signup);