import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BiSmile } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';

//there is no re-render on LIKES, OR COMMENTS, SOMETIMES???
//there is a bug, where right after I post on a photo, if I comment, the app breaks
// heroku doesn't show the edit button on a post
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
        this.toggleEditButton = this.toggleEditButton.bind(this);
        this.renderViewPost = this.renderViewPost.bind(this);
        this.renderLike = this.renderLike.bind(this);
    }

    // componentDidUpdate(prevProps){
    //     // debugger
    //     if (prevProps.post.commentIds.length != this.props.post.commentIds.length){
    //         console.log("am I here?") //I am never making it here, which is what is supposed to rerender the last comment without refreshing the page, if this if statement doesn't happen, line 90 breaks
    //         this.setState({lastComment: (this.props.comments[this.props.post.commentIds[this.props.post.commentIds.length - 1]])})
    //     }
    // }

    componentDidMount(){
        this.setState({lastComment: (this.props.comments[this.props.post.commentIds[this.props.post.commentIds.length - 1]])})
    }

    showButton(){
        const {currentUser, allLikes} = this.props
        // const { likeIds } = this.props.post
        let likeStatus = false;
        let likeId;
        this.props.post.likeIds.forEach((id)=>{
            if ((allLikes[id]).username === currentUser.username){
                likeStatus = true
                likeId = id
            }
        })
        if (likeStatus){
            return <button className="filled-heart post-heart" onClick={()=>this.handleDislike(likeId)}><AiFillHeart size={30}/></button>
        }else{
            return <button className="hollow-heart post-heart" onClick={()=>this.handleLike()}><AiOutlineHeart size={30}/></button>
        }
    }

    showCommentButton(){
        if(this.state.body === ''){
            return <button disabled="disabled"  className="disabled-comment-button">Post</button>
        }else{
            return <button className="comment-post-button" onClick={this.handleSubmit}>Post</button>
        }
    }

    handleLike(){
        this.props.createLike(this.state)
        console.log(this.props.allLikes, 'this is all the likes')
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
        // this.props.fetchPost(this.props.post.id)
    }

    renderFinalComment(){
        if ((this.props.post.commentIds).length > 0){
            let commentIdArr = this.props.post.commentIds;
            // let finalCommentId = commentIdArr[commentIdArr.length - 1];
            let finalCommentId;
            let index = (commentIdArr.length - 1);
            while (!this.props.comments[commentIdArr[index]]) {
                index--;
            }
            finalCommentId = commentIdArr[index];




            // let finalComment = this.props.comments[finalCommentId];
            // console.log(finalComment)
            // return <li className="last-comment">{finalCommentText}</li> 
            return (
                <li className="username index-username">
                    <Link className="final-comment-username" to={`/users/${this.props.comments[finalCommentId].userId}`}>{this.props.comments[finalCommentId].username}</Link>
                    <span className="index-caption-body">
                        {/* {this.state.lastComment.body} */}
                        {this.props.comments[finalCommentId].body}
                    </span>
                </li>
            )
        }else{
            return null;
        }
    }

    toggleEditButton(){
        if(this.props.currentUser.id === this.props.post.authorId){
            return <AiOutlineEdit size={25} onClick={()=>this.props.openModal('edit-modal', this.props.post.id)} className="edit-button"/>;
        }else{
            return null
        }
    }

    renderViewPost () {
        if (this.props.post.commentIds.length === 0) {
            return (<button className="view-comments-link"
                               onClick={()=>this.props.openModal('show-modal', this.props.post.id)}>View post
                    </button>)
        } else {
            return (
                <button className="view-comments-link"
                    onClick={()=>this.props.openModal('show-modal', this.props.post.id)}>View all comments
                </button>
            )
        }
    }

    renderLike () {
        if (this.props.post.likeIds.length === 1) {
            return (<li className="num-likes">{this.props.post.likeIds.length} like</li>)
        } else {
            return (<li className="num-likes">{this.props.post.likeIds.length} likes</li>)
        }
    }

    render(){
        // if (!this.state.lastComment.userId) {
        //     return null
        // }
        
        return(
            <li className="post-container">
                <div className="post-header">
                    <div className="icon-name">
                        <img className="profile-pic-icon" src={window.profileIcon} />
                        <Link className="username index-username-top" to={`/users/${this.props.post.authorId}`}>{this.props.post.authorName}</Link>
                    </div>
                    {this.toggleEditButton()}
                </div>
                <img className="postedpix" src={this.props.post.photoUrl}/>
                <div className="bottom-section">
                    <div className="heart-container">
                        <div>{this.showButton()}</div>
                    </div>
                    <ul className="index-caption">
                        {this.renderLike()}
                        <li className="username index-username"><Link className="username-index-name" to={`/users/${this.props.post.authorId}`}>{this.props.post.authorName}</Link><span className="index-caption-body">{this.props.post.caption}</span></li>
                        <li className="view-comments-link-li">
                            {this.renderViewPost()}
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