import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import NewPost from "./new_post"
import { createPost } from "../../actions/post_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser
    }
   
}

const mDTP = dispatch => ({
    closeModal: ()=>dispatch(closeModal()),
    createPost: (post)=>dispatch(createPost(post))
})

export default connect(mSTP, mDTP)(NewPost)