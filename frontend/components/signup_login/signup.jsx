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
        this.renderErrors = this.renderErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
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

    renderErrors(){
        if(this.props.errors.length === 0) {
            return null
        }else{
            return(
                <ul>{this.props.errors.map((error, i) =><li key={i}>{error}</li>)}</ul>
            )
        }
    }

    demoLogin(e){
        this.props.login({
            username: 'john_boy223',
            password: '123456'})
                .then(()=>this.props.history.push('/'))
    }

    render(){
        return (
            <div className='splash-container'>
                <div className='login-box'>
                    <img className="loginimage1" src={window.loginImage1} />
                    <img className="loginimage2" src={window.loginImage2} />
                    <img className="loginimage3" src={window.loginImage3} />
                    <h3>𝓂𝒶𝓇𝑔𝒶𝓉𝓈𝓃𝒾</h3>
                    <h5>Sign up to see photos and videos from your friends.</h5>
                    <form className="login-form">
                        <input type="text" value={this.state.username} placeholder='Phone number, email or username' onChange={this.handleInput("username")}/>
                        <input type="password" value={this.state.password} placeholder='Password' onChange={this.handleInput("password")}/>
                        <button onClick={this.handleSubmit}>Sign Up</button>
                    </form>
                    {this.renderErrors()}
                    <p>Already have an account? <Link className="loginbutton" onClick={this.props.resetErrors} to="/login">Log In.</Link></p>
                    <div>or</div>
                    <p>Log in as a <button className="loginbutton" onClick={(e)=>this.demoLogin(e)}>Demo User</button></p>
                </div>
            </div>
        )
    }
};

export default SignUp;