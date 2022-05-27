import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import EditPost from "./edit_post";
import { updatePost, deletePost } from '../../actions/post_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    post: ownProps.post
})

const mDTP = dispatch => ({
    closeModal: ()=>dispatch(closeModal()),
    updatePost: (post, postId)=>dispatch(updatePost(post, postId)),
    deletePost: (postId)=>dispatch(deletePost(postId))
})

export default connect(mSTP, mDTP)(EditPost)