import React from "react";
import { Link } from 'react-router-dom';
import Header from "../header/header_container";
import PostIndexItem from "./index_list_item_container";

class Index extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPosts()
    }

   
    render(){
        const { posts, deletePost, fetchUser } = this.props
        return (
            <div className="header">
                <Header />
                <ul className="posts-container">
                    {
                        posts.map(post => (
                            <PostIndexItem
                                post={post}
                                key = {post.id}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Index;
