import React from "react";
import { Link } from 'react-router-dom';
import Header from "../header/header_container";
import PostIndexItem from "./index_list_item_container";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

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
            <div>
                <div className="header-holder">
                    <Header />
                </div>
                <div className="header">
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
                    <div className="suggestions-container">
                        <div className="current-user-link">
                            <Link className="username index-username-top" to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.username}</Link>
                            <Link className="username make-blue index-username-top" to={`/users/${this.props.currentUser.id}`}>View Profile</Link>
                        </div>

                        <div className="suggestions-for-u">
                            <span className='suggestions-word'>Suggestions For You</span>
                        </div>
                            
                        <ul className="suggestions-container-list">
                            <li className="suggestion-list-item">
                                <Link className="username index-username-top" to={'/users/2'}>JusticarKayle</Link>
                                <Link className="username make-blue index-username-top" to={'/users/2'}>View Profile</Link>
                            </li>
                            
                            <li className="suggestion-list-item">
                                <Link className="username index-username-top" to={'/users/3'}>AnakinSkywalker</Link>
                                <Link className="username make-blue index-username-top" to={'/users/3'}>View Profile</Link>
                            </li>

                            <li className="suggestion-list-item">
                                <Link className="username index-username-top" to={'/users/5'}>ProwessIronwill</Link>
                                <Link className="username make-blue index-username-top" to={'/users/5'}>View Profile</Link>
                            </li>

                            <li className="suggestion-list-item">
                                <Link className="username index-username-top" to={'/users/6'}>ValkyrieJane</Link>
                                <Link className="username make-blue index-username-top" to={'/users/6'}>View Profile</Link>
                            </li>

                            <li className="suggestion-list-item">
                                <Link className="username index-username-top" to={'/users/4'}>BastilaShan</Link>
                                <Link className="username make-blue index-username-top" to={'/users/4'}>View Profile</Link>
                            </li>
                        </ul>

                        <ul className="about-me">
                            <li>
                                <a href="/">about me</a>
                                <a target='_blank' className="github" href="https://github.com/nobleport"><AiFillGithub/></a>
                                <a target='_blank' className="linked-in" href="https://www.linkedin.com/in/john-gardner-320b4a20b"><AiFillLinkedin/></a>
                            </li>
                        </ul>

                        <div className="copyright">© 2022 Margatsni by John 'john_boy223' Gardner</div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Index;
