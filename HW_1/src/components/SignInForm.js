import React, { Component } from 'react';

const INITIAL_STATE = {
    login: '', 
    password: '',
    agreedToTerms: false,
}



export default class SignupForm extends Component {
    state = {...INITIAL_STATE};

    handleLoginChange = e => {
        this.setState({
            login: e.target.value
        });
    };

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };
    
    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state);

        this.reset();
    }

    handleAgreeChange = ({target}) => {
        const {checked} = target;

        this.setState({
            agreedToTerms: checked
        })
    }

    reset = () => {
        this.setState({...INITIAL_STATE})
    }

    render(){
        const { login, password, agreedToTerms, } = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <h1>SignIn</h1>
                <input 
                  type="text" 
                  name="login"
                  value={login} 
                  onChange={this.handleChange}
                  placeholder="Login"
                />
            
                <input 
                  type="password"
                  name="password" 
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                <br/>
                
                <label>
                    Agree to terms
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={this.handleAgreeChange}
                    />            
                </label>
                <br/><br/>
                <button disabled={!agreedToTerms}>Signup as {login}</button>
            </form>
        );
    }
}