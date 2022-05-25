import React from "react";
import { BiSmile } from 'react-icons/Bi';

 
class ShowPost extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: '',
            post_id: this.props.post.id
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentDidMount(){
        this.props.fetchPost(this.props.post.id);
    }

    showButton(){
        if(this.state.body === ''){
            return <button className="disabled-comment-button">Post</button>
        }else{
            return <button className="comment-post-button" onClick={this.handleSubmit}>Post</button>
        }
    }
    handleChange(){
        return (e) => this.setState({ body: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createComment(this.state);
        this.setState({body: ''})
    }

    render(){
        const { posts, post } = this.props;
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
                    <div className="comment-container">
                    {this.props.comments.map((comment, i)=>{
                        return (
                            <ul key={i} className="comment">
                                <li><img src={window.profileIcon}/></li>
                                <li className="username">{comment.username}<span className="comment-body">{comment.body}</span></li>
                            </ul>
                        )
                    })}
                    </div>
                    <div className="comments-likes-section">
                        <div className="comments-form">
                            <BiSmile size={30} className="comment-smiley"/>
                            <form>
                                <input className="comment-post-input" type="text" value={this.state.body} placeholder="Add a comment..." onChange={this.handleChange()}/>
                                {this.showButton()}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ShowPost;