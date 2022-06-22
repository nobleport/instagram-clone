import React from 'react';
import CommentIndexItem from './comment_index_item_container';
import { BiSmile } from 'react-icons/bi';

class CommentIndex extends React.Component{
    constructor(props){
        super(props)
        this.state={
            body: '',
            post_id: this.props.post.id
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchPost(this.props.post.id)
    }

    showButton(){
        if(this.state.body === ''){
            return <button className="disabled-comment-button">Post</button>
        }else{
            return <button className="comment-post-button" onClick={this.handleSubmit}>Post</button>
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createComment(this.state)
            .then(()=>this.setState({body: ''}));
        
        // this.props.fetchPost(this.props.post.id)
    }

    handleChange(){
        return (e) => this.setState({ body: e.target.value })
    }
    

    render(){
        const {post} = this.props;
        let arr = []
        post.commentIds.forEach((id)=>{
            if (this.props.comments[id]){
                arr.push((this.props.comments[id]))
            } else {
                return null;
            }
          
        })
        return (
        <div className='comment-container-container'>
            <div className="comment-container">
                <div className='scroll-bar'>
                    {arr.map((comment)=>(
                        <CommentIndexItem key={comment.id} comment={comment}/>
                    ))}
                </div>
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
        )
    }
}

export default CommentIndex;