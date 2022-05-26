import React from "react";
import CommentIndex from "./comment_index_container";


class ShowPost extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: '',
            comment_id: this.props.post.id,
        }
        
        
    }

    componentDidMount(){
        this.props.fetchPost(this.props.post.id);
    }

    
 

   
    

    

    render(){
        const { post } = this.props;
        
        return (
            <div className="show-modal-container">
                <div className="image-holder">
                    <img src={this.props.post.photoUrl}/>
                </div>
                <div className="comments-holder">
                    <ul className="comments-header">
                        <li><img src={window.profileIcon}/></li>
                        <li className="username">{post.authorName}<span className="comment-body">{post.caption}</span></li>
                    </ul>
                    <CommentIndex  post={post}/>
                    {/* <div className="comment-container">
                    {arr.map((comment, i)=>{
                        return (
                            <ul key={i} className="comment">
                                <li><img src={window.profileIcon}/></li>
                                <li className="username">{comment.username}<span className="comment-body">{comment.body}</span></li>
                                <li>
                                    <div className="heart-container">
                                        <div>{this.showHeartButton()}</div>
                                    </div>
                                </li>
                            </ul>
                        )
                    })}
                    </div> */}
                    
                </div>
            </div>
        )
    }

}

export default ShowPost;