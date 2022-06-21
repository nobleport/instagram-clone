import { connect } from "react-redux";
import SearchBar from "./search_bar";
import {fetchResults} from '../../actions/user_actions';

//gotta get a fetch the results slice of state action and send it through the reducers 


const mSTP = state => {
    return {
        results: state.entities.results
    }
}

const mDTP = dispatch => {
    return {
        fetchResults: (query) => dispatch(fetchResults(query)) 
    }
}

export default connect(mSTP, mDTP)(SearchBar)