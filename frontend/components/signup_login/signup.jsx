import React from 'react';
import {Link} from 'react-router-dom'

class SignUp extends React.Component {
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
        this.props.signup(this.state)
            .then(()=>this.props.history.push('/'), )
    }

    render(){
        return (
            <div className="Signup Form">
                <form>
                    <input type="text" value={this.state.username} placeholder='Phone number, email or username' onChange={this.handleInput("username")}/>
                    <input type="password" value={this.state.password} placeholder='Password' onChange={this.handleInput("password")}/>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
                <p>Already have an account? <Link to="/login">Log In.</Link></p>
            </div>
        )
    }
};

export default SignUp;