import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchPost } from "../../actions/post_actions";
import ShowPost from "./show_post"
import { createComment } from '../../actions/comment_actions'


const mSTP = (state, ownProps) => {
    return {
    post: ownProps.post,
    posts: state.entities.posts,
    comments: state.entities.comments,
    currentUser: state.session.currentUser,
    allLikes: state.entities.likes
}}

const mDTP = dispatch => ({
    fetchPost: (postId)=>dispatch(fetchPost(postId)),
    createComment: (comment)=>dispatch(createComment(comment)),
    openModal: (modal, postId)=>dispatch(openModal(modal, postId)),
    closeModal: ()=>dispatch(closeModal())
})

export default connect(mSTP, mDTP)(ShowPost)