import { connect } from "react-redux";
import { deletePost, fetchPosts } from "../../actions/post_actions";
import { logout } from "../../actions/session_actions";
import { fetchUser } from "../../actions/user_actions";
import Index from './index'

const mSTP = state =>{
    console.log(state)
    return {
        posts: Object.values(state.entities.posts),
    }
}

const mDTP = dispatch => ({
    fetchPosts: ()=>dispatch(fetchPosts()),
    deletePost: (postId)=>dispatch(deletePost(postId)),
    fetchUser: (userId)=>dispatch(fetchUser(userId))
}) 

export default connect(mSTP, mDTP)(Index)