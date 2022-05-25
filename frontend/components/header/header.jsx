import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component {
    constructor(props){
        super(props)
        this.signout = this.signout.bind(this);
    }

    signout(){
        this.props.logout()
            .then(()=>this.props.history.push("/login"))
    }

    render(){
        return(
            <div className='navbar'>
                <div className='logo-container'>
                    <Link className="instagram-logo" to="/">Margatsni</Link>
                </div>
                <div className="search-container">
                    <img className="search-icon" src={window.searchIcon} />
                    <input className="search-bar"placeholder="        Search" type="text" />
                </div>
                <ul className='header-list'>
                    <li>
                        <Link to="/"><img src={window.homeIcon} /></Link>
                    </li>
                    <li>
                        <img onClick={()=>this.props.openModal('form-modal')} src={window.newPostIcon} />
                    </li>
                    <li>
                        <img src={window.heartIcon} />
                    </li>
                    <li>
                        <img src={window.profileIcon} />
                    </li>
                    <li>
                        <button onClick={this.signout}>Log Out</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;