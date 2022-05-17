import React from "react";
import { Link } from 'react-router-dom';
import Header from "./header/header";

class Index extends React.Component {
    constructor(props){
        super(props)
        this.signout = this.signout.bind(this);
    }

    signout(){
        this.props.signout()
            .then(()=>this.props.history.push("/login"))
    }
    render(){
        return (
            <div className="header-logo">
                <Header/>
                <ul className="signout-dropdown">
                    <li><button onClick={this.signout}>Sign Out</button></li>
                </ul>
                <img src={window.instagramLogo}/>
            </div>
            
        )
    }
}

export default Index;
