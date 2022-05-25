import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import NewPost from "./new_post"
import { createPost } from "../../actions/post_actions";

const mSTP = state => ({
})

const mDTP = dispatch => ({
    closeModal: ()=>dispatch(closeModal()),
    createPost: (post)=>dispatch(createPost(post))
})

export default connect(mSTP, mDTP)(NewPost)