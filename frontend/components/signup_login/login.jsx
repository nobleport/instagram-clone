import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
    }

    handleInput(type){
        return(e)=>{
            this.setState({[type]: e.target.value})
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state)
        .then(()=>this.props.history.push('/'))
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
    
    renderLogin() {
        if (this.state.password.length < 6 || !this.state.username.length > 0) {
            return <button disabled='disabled' className='login-form-button' onClick={(e)=>this.handleSubmit(e)}>Log in</button>
        } else {
            return <button className='login-button' onClick={(e)=>this.handleSubmit(e)}>Log in</button>
        }
    }
        
    render(){
    return (
        <div className='splash-container'>
            <div className='login-box'>
                <img className="loginimage1" src={window.loginImage1} />
                <img className="loginimage2" src={window.loginImage2} />
                <img className="loginimage3" src={window.loginImage3} />
                <h3>𝓂𝒶𝓇𝑔𝒶𝓉𝓈𝓃𝒾</h3>
                <form className="login-form">
                    <input type="text" value={this.state.username} placeholder='Phone number, email or username' onChange={this.handleInput("username")}/>
                    <input type="password" value={this.state.password} placeholder='Password' onChange={this.handleInput("password")}/>
                    {this.renderLogin()}
                </form>
                {this.renderErrors()}
                <p>Don't have an account? <Link className='loginbutton' onClick={this.props.resetErrors}to="/signup">Sign Up</Link></p>
                <div>or</div>
                <p>Log in as a <button className="loginbutton" onClick={(e)=>this.demoLogin(e)}>Demo User</button></p>
            </div>
        </div>
        )
    }
};

export default Login;