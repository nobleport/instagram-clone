import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){
        return(e)=>{
            this.setState({[type]: e.target.value})
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state)
            .then(()=>this.props.history.push('/'),)
    }

    render(){
        return (
            <div className="Login Form">
                <form>
                    <input type="text" value={this.state.username} placeholder='Phone number, email or username' onChange={this.handleInput("username")}/>
                    <input type="password" value={this.state.password} placeholder='Password' onChange={this.handleInput("password")}/>
                    <button onClick={this.handleSubmit}>Log in</button>
                </form>
                <p>Don't have an account? <Link to="/signup">Sign Up.</Link></p>
            </div>
        )
    }
};

export default Login;