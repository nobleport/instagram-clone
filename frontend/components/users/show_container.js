import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import Show from "./show"

const mSTP = (state, ownProps) => ({
    //how do I get this?
    userId: ownProps.match.params.userId,
    posts: Object.values(state.entities.posts)
})

const mDTP = dispatch => ({
    fetchUser: (userId)=>dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(Show)