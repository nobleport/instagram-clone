import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../search/search_bar_container';


class Header extends React.Component {
    constructor(props){
        super(props)
        this.signout = this.signout.bind(this);
        this.dropDown = this.dropDown.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
    }

    componentDidMount(){
        let dropDown = document.querySelector('.dropdown-content');
        dropDown.style.display = 'none';
    }

    signout(){
        this.props.logout()
            .then(()=>this.props.history.push("/login"))
    }

    dropDown(e) {
        if (!e.target.closest(".dropdown-content-container") && !e.target.closest(".dropdown-content")) {
            document.querySelector(".dropdown-content").style.display = 'none'
            document.removeEventListener("click", this.dropDown)
        }
    }

    toggleDropDown() {
        let dropDown = document.querySelector('.dropdown-content');
        if (dropDown.style.display === 'none') {
            
            dropDown.style.display = 'flex'
            document.addEventListener('click', this.dropDown)
        } else {
            console.log('goodbye')
            dropDown.style.display = 'none'
            document.removeEventListener('click', this.dropDown)
        };
    };

    render(){
        return(
            <div className='navbar'>
                <div className='logo-container'>
                    <Link className="instagram-logo" to="/">Margatsni</Link>
                </div>
                <SearchBar/>
                <ul className='header-list'>
                    <li>
                        <Link to="/"><img src={window.homeIcon} /></Link>
                    </li>
                    <li>
                        <img className="open-new-post-button" onClick={()=>this.props.openModal('form-modal')} src={window.newPostIcon} />
                    </li>
                    
                    <li className='dropdown-content-container' >
                        <img className='dropbtn' src={window.profileIcon} onClick={this.toggleDropDown}  />
                        <div id="myDropdown" className="dropdown-content" >
                            <Link className="link-to-profile-dropdown" to={`/users/${this.props.currentUser.id}`}><span>Profile</span></Link>
                            <button className='logout-dropdown-button' onClick={this.signout}>Log Out</button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;