import React from "react";
import { Link } from "react-router-dom";


class PostIndexItem extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <li className="post-container">
                <div className="post-header">
                    <img src={window.profileIcon} />
                    <Link to={`/users/${this.props.post.authorId}`}>{this.props.post.authorName}</Link>
                </div>
                <img className="postedpix" src={this.props.post.photoUrl}/>
                <div className="caption">
                    <p>{this.props.post.authorName}</p>
                    <p>{this.props.post.caption}</p>
                </div>
            </li> 
        )
    }
}

export default PostIndexItem