import { connect } from "react-redux";
import { login, resetErrors } from  "../../actions/session_actions";
import Login from "./login";

const mSTP = state => ({
    errors: state.errors
})

const mDTP = (dispatch)=> ({
    login: (formUser) => dispatch(login(formUser)),
    resetErrors: ()=> dispatch(resetErrors())
});

export default connect(mSTP, mDTP)(Login);