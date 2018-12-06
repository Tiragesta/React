import React, { Component } from 'react';

export default class NoteEditor  extends Component {
    state = {
        text: ''
    }

    handleChange = ({target}) => {
        const { name, value } = target;
        
        this.setState({
            [name]: value
        })
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.text);
        
        this.setState({text: ''}); 
    };

    render(){
        const { text, mark } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
            <br/>
            <hr/>
                <label>
                    Выберите оценку от 1 до 10
                    <select name="mark" value={mark}  onChange={this.handleChange}>
                        <option value="" disabled>
                            ...
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <br/>
                <textarea 
                  rows="5"
                  cols="30"
                  name="text"
                  value={text}
                  onChange={this.handleChange}
                  placeholder="Оставьте свой комментарий"
                  autocomplete="off"
                /><br/>
                <button>Добавить комментарий</button>
                <br/>
            </form>
            
        )
    }};