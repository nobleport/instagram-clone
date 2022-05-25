import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import Show from "./show";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    //how do I get this?
    return {
        userId: ownProps.match.params.userId,
        posts: Object.values(state.entities.posts),
        user: state.entities.users[ownProps.match.params.userId],
    }
}

const mDTP = dispatch => ({
    fetchUser: (userId)=>dispatch(fetchUser(userId)),
    openModal: (modal, postId)=>dispatch(openModal(modal, postId)),
})

export default connect(mSTP, mDTP)(Show)