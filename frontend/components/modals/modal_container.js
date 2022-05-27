import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import Modal from "./modal"

const mSTP = state => {
    return {
        modal: state.ui.modal,
        post: state.entities.posts[state.ui.postId]
    }
}

const mDTP = dispatch => ({
    closeModal: ()=>dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal)