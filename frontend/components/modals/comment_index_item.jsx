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
            return <button className="filled-heart post-heart" onClick={()=>this.handleDislike(likeId)}><AiFillHeart size={30}/></button>
        }else{
            return <button className="hollow-heart post-heart" onClick={this.handleLike}><AiOutlineHeart size={30}/></button>
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
            <ul className="comment">
                <li><img src={window.profileIcon}/></li>
                <li className="username">{comment.username}<span className="comment-body">{comment.body}</span></li>
                <li>
                    <div className="heart-container">
                        <div>{this.showHeartButton()}</div>
                        <div>{comment.likeIds.length}</div>
                    </div>
                </li>
            </ul>
        )
    }
}

export default CommentIndexItem;