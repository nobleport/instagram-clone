import IndexListItem from "./index_list_item"
import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { deletePost } from "../../util/post_api_util";



const mSTP = (state, ownProps) =>{
    return {
        users: state.entities.users,
        post: ownProps.post
    }
}

const mDTP = dispatch => ({
    fetchUser:  (userId)=>dispatch(fetchUser(userId)),
    deletePost: (postId)=>dispatch(deletePost(postId))
}) 

export default connect(mSTP, mDTP)(IndexListItem)