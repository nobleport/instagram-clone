import React from "react";
import Header from "../header/header_container";

class Show extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }

    render(){
        if (!this.props.user) return null;
        const {username} = this.props.user
        return (
            <div className="profile-page-show">
                <div className="header-holder">
                    <Header/>
                </div>
                <div className="header">
                    <div className="show-page">
                        <div className="show-header">
                            <img className="show-profile-pic" src={window.profileIcon}/>
                            <div className="show-info-container">
                                <ul className="show-name">
                                    <li>{username}</li>
                                    {/* <li key={2}><img className="following-icon" src={window.following}/></li> */}
                                </ul>
                                <ul className="show-following">
                                    <li key={1}>{(Object.values(this.props.posts)).length} posts</li>
                                    <li key={2}>{Math.floor(Math.random()*200)} followers</li>
                                    <li key={3}>{Math.floor(Math.random()*200)} following</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid-container">
                            <ul className="show-photos">
                                {
                                    this.props.posts.map((post,i) =>(
                                        <li key={i} className="show-photo" onClick={()=>this.props.openModal('show-modal', post.id)}>
                                            <img src={post.photoUrl}/>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Show