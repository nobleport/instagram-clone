import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchPost } from "../../actions/post_actions";
import ShowPost from "./show_post"
import { createComment } from '../../actions/comment_actions'

const mSTP = (state, ownProps) => {
    return {
    post: ownProps.post,
    posts: state.entities.posts,
    comments: state.entities.comments ? Object.values(state.entities.comments) : []
}}

const mDTP = dispatch => ({
    fetchPost: (postId)=>dispatch(fetchPost(postId)),
    createComment: (comment)=>dispatch(createComment(comment))
})

export default connect(mSTP, mDTP)(ShowPost)