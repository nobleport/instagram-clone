import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BiSmile } from 'react-icons/bi'

class PostIndexItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            post_id: this.props.post.id,
            lastComment: {}
        }
        this.handleLike = this.handleLike.bind(this);
        this.showButton = this.showButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderFinalComment = this.renderFinalComment.bind(this);
    }

    componentDidUpdate(prevProps){
        if (prevProps.post.commentIds.length != this.props.post.commentIds.length){
            this.setState({lastComment: (this.props.comments[this.props.post.commentIds[this.props.post.commentIds.length - 1]])})
        }
    }
    
    componentDidMount(){
        this.setState({lastComment: (this.props.comments[this.props.post.commentIds[this.props.post.commentIds.length - 1]])})
    }

    showButton(){
        const {currentUser} = this.props
        let likeStatus;
        let likeId;
        if(this.props.post.likes){
            Object.values(this.props.post.likes).forEach((like)=>{
                if (like.username === currentUser.username){
                    likeStatus = true;
                    likeId = like.id;
                }else{
                    likeStatus = false;
                }
            })
        }else{
            likeStatus = false;
        }
        if (likeStatus){
            return <button className="filled-heart post-heart" onClick={()=>this.handleDislike(likeId)}><AiFillHeart size={30}/></button>
        }else{
            return <button className="hollow-heart post-heart" onClick={this.handleLike}><AiOutlineHeart size={30}/></button>
        }
    }

    showCommentButton(){
        if(this.state.body === ''){
            return <button className="disabled-comment-button">Post</button>
        }else{
            return <button className="comment-post-button" onClick={this.handleSubmit}>Post</button>
        }
    }

    handleLike(){
        this.props.createLike(this.state)
    }

    handleDislike(likeId){
        this.props.deleteLike(likeId)
    }

    handleChange(){
        return (e) => this.setState({ body: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createComment(this.state)
        this.setState({body: ''})
        this.props.fetchPost(this.props.post.id)
    }

    renderFinalComment(){
        if ((this.props.post.commentIds).length > 0){
            let commentIdArr = this.props.post.commentIds;
            let finalCommentId = commentIdArr[commentIdArr.length - 1];
            let finalComment = this.props.comments[finalCommentId];
            console.log(finalComment)
            // return <li className="last-comment">{finalCommentText}</li>
            return (
                <li className="username index-username">
                    {this.state.lastComment.username}
                    <span className="index-caption-body">
                        {this.state.lastComment.body}
                    </span>
                </li>
            )
        }else{
            return null;
        }
    }

    render(){   
        return(
            <li className="post-container">
                <div className="post-header">
                    <img className="profile-pic-icon" src={window.profileIcon} />
                    <Link className="username index-username-top" to={`/users/${this.props.post.authorId}`}>{this.props.post.authorName}</Link>
                </div>
                <img className="postedpix" src={this.props.post.photoUrl}/>
                <div className="bottom-section">
                    <div className="heart-container">
                        <div>{this.showButton()}</div>
                    </div>
                    <ul className="index-caption">
                        <li className="num-likes">totalLikes</li>
                        <li className="username index-username">{this.props.post.authorName}<span className="index-caption-body">{this.props.post.caption}</span></li>
                        <li className="view-comments-link-li">
                            <Link className="view-comments-link"
                               onClick={()=>this.props.openModal('show-modal', this.props.post.id)}>View all comments
                            </Link>
                        </li>
                        {this.renderFinalComment()}
                        {/* <li className="hours-ago">time since post</li> */}
                    </ul>
                    <div>
                        <div className="comments-form">
                            <BiSmile size={30} className="comment-smiley"/>
                            <form>
                                <input className="comment-post-input" type="text" value={this.state.body} placeholder="Add a comment..." onChange={this.handleChange()}/>
                                {this.showCommentButton()}
                            </form>
                        </div>
                    </div>
                </div>
            </li> 
        )
    }
}

export default PostIndexItem