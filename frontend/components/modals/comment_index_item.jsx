import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';


class CommentIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state={
            comment_id: this.props.comment.id
        }
        this.handleLike = this.handleLike.bind(this);
        this.showHeartButton = this.showHeartButton.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
    }

    showHeartButton(){
        const {currentUser, allLikes} = this.props
        // const { likeIds } = this.props.post
        let likeStatus = false;
        let likeId;
        //how can I get the comment array
        console.log(this.props.comment)
        this.props.comment.likeIds.forEach((id)=>{
            if (allLikes[id]){
                if ((allLikes[id]).username === currentUser.username){
                likeStatus = true
                likeId = id
                }
            } 
        })
        if (likeStatus){
            return <button className="filled-heart post-heart comment-heart" onClick={()=>this.handleDislike(likeId)}><AiFillHeart size={16}/></button>
        }else{
            return <button className="hollow-heart post-heart comment-heart" onClick={this.handleLike}><AiOutlineHeart size={16}/></button>
        }
    }

    handleLike(){
        this.props.createCommentLike(this.state)
    }

    handleDislike(likeId){
        this.props.deleteCommentLike(likeId)
    }

    render(){
        const {comment} = this.props
        return (
            <div id="comment-in-show" className="comment">
                <div className='profile-pic-username comment-profile-pic-username'>
                    <img src={window.profileIcon}/>
                    <div className="username">{comment.username}<span className="comment-body">{comment.body}</span></div>
                    <div className='comment-like-count'>{comment.likeIds.length} likes</div>
                </div>
                <div>
                    <div className="heart-container">
                        <div>{this.showHeartButton()}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;