import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component {
    constructor(props){
        super(props)
        this.signout = this.signout.bind(this);
    }

    signout(){
        console.log(this.props)
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
                    <img src={window.searchIcon} />
                    <input defaultValue="Search" type="text" />
                </div>
                <ul className='header-list'>
                    <li>
                        <img src={window.homeIcon} />
                    </li>
                    <li>
                        <img src={window.messageIcon} />
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