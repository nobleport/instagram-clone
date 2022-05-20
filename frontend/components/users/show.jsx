import React from "react";
import Header from "../header/header_container";

class Show extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchUser(this.props.userId) 
    }

    render(){
        return (
            <div>
                <Header/>
                <div className="grid-container">
                    <ul className="show-photos">
                        {
                            this.props.posts.map(post =>(
                                <li className="show-photo">
                                    <img src={post.photoUrl}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Show