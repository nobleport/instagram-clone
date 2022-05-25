import IndexListItem from "./index_list_item"
import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { deletePost } from "../../util/post_api_util";
import { createLike } from "../../actions/post_actions";
import { deleteLike, fetchPost } from "../../actions/post_actions";
import { createComment } from "../../actions/comment_actions";
import { openModal } from "../../actions/modal_actions";
const mSTP = (state, ownProps) =>{
    return {
        users: state.entities.users,
        post: ownProps.post,
        currentUser: state.session.currentUser,
        comments: state.entities.comments
    }
}

const mDTP = dispatch => ({
    fetchUser:  (userId)=>dispatch(fetchUser(userId)),
    deletePost: (postId)=>dispatch(deletePost(postId)),
    createLike: (like)=>dispatch(createLike(like)),
    deleteLike: (likeId)=>dispatch(deleteLike(likeId)),
    createComment: (comment)=>dispatch(createComment(comment)),
    openModal: (type, postId)=>dispatch(openModal(type, postId)),
    fetchPost: (postId)=>dispatch(fetchPost(postId))
}) 

export default connect(mSTP, mDTP)(IndexListItem)