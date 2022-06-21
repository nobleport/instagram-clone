import React from "react";
import {NavLink} from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props) 
        this.state={
            input: '',
            change: 1
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.reset = this.reset.bind(this);
    };

    componentDidMount(){
        console.log(this.props.results, 'this is the results');
    }

    handleSearch(e) {
        this.setState({ input: e.target.value})
        this.props.fetchResults(this.state.input)
        if (this.state.change === 1) {
            this.setState({change: 0})
        } else {
            this.setState({change: 1})
        }
    };


    show () {
        document.querySelector(".search-results").classList.remove("hidden");
    };

    hide (e) {
        if (!e.currentTarget.contains(e.relatedTarget)) {
        document.querySelector(".search-results").classList.add("hidden");
        }
    };

    reset () {
        document.querySelector(".search-results").classList.add("hidden");
        this.setState({input: ''});
    };

    
    render() {
        console.log(this.props.results, 'results below render')
        const results = Object.values(this.props.results);
        return (
            <>
                <div className="search-container" onBlur={(e) => this.hide(e)}>
                <input
                    value={this.state.input}
                    onChange={(e) => this.handleSearch(e)}
                    onFocus={() => this.show()}
                    className="search-bar"
                    placeholder="Search"
                />
                <div className="search-results hidden">
                    {results?.length > 0 && this.state.input.length > 0 ? (
                    results.map((res) => (
                        <NavLink
                            className="search-card"
                            onClick={this.reset}
                            to={`/users/${res.id}`}
                        >
                        <div className="search-names">
                            <img src={window.profileIcon} className='search-profile-icon' />
                            <div className="search-username">{res.username}</div>
                        </div>
                        </NavLink>
                    ))
                    ) : (
                    <div className="search-none">No results.</div>
                    )}
                    </div>
                </div>
          </>
          )
          
    };
}

export default SearchBar;