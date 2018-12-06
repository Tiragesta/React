import React, { Component } from 'react';

const GENDER = {
    male: 'male',
    female: 'female'
}

const INITIAL_STATE = {
    login: '',
    email: '', 
    password: '',
    agreedToTerms: false,
    gender: null,
    age: ''
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
        const { login, email, password, agreedToTerms, gender, age } = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <h1>SignUp</h1>
                <input 
                  type="text" 
                  name="login"
                  value={login} 
                  onChange={this.handleChange}
                  placeholder="Login"
                />
                <input 
                  type="email"
                  name="email" 
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Email"
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
                <br/>
                <section>
                <h2>Choose your gender</h2>
                <label>
                    Male
                    <input
                        type="radio"
                        checked={gender === GENDER.male}
                        name="gender"
                        value={GENDER.male}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Female
                    <input
                        type="radio"
                        checked={gender === GENDER.female}
                        name="gender"
                        value={GENDER.female}
                        onChange={this.handleChange}
                    />
                </label>
                </section>

                <br/>
                <label>
                    Choose your age
                    <select name="age" value={age} onChange={this.handleChange}>
                        <option value="" disabled>
                            ...
                        </option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36+">36+</option>
                    </select>
                </label>
                <br/><br/>
                <button disabled={!agreedToTerms}>Signup as {login}</button>
            </form>
        );
    }
}