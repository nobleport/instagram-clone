import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { createComment } from '../../actions/comment_actions'
import { fetchPost } from "../../actions/post_actions";

const mSTP = (state, ownProps) => {
    return {
        comments: state.entities.comments,
        post: ownProps.post
    }
}

const mDTP = dispatch => {
    return {
        createComment: (comment)=>dispatch(createComment(comment)),
        fetchPost: (postId)=>dispatch(fetchPost(postId)),
    }
}

export default connect(mSTP, mDTP)(CommentIndex)