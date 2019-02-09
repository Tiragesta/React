import React, { Component } from 'react';
import * as API from '../services/api';

export default class NewMenuItem extends Component{
    state={
        menu: []
    }

    handleAddMenuItem = () => {
        const item = {
          name: `New name ${Date.now()}`,
          price: Math.random(),
          image:
            'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
        };
    
        API.addMenuItem(item).then(newItem => {
          this.setState(state => ({
            menu: [...state.menu, newItem],
          }));
        });

        const { state } = this.props.location;
        //const { category } = this.state;
       
        if(state){
             return this.props.history.push(state.from);
        }
        this.props.history.push({
            pathname: '/menu',
            //search: `?category=${this.state.category}`
        });
    }
    

    render(){
        return(
            <div>
                <h1>Добавить элемент меню</h1>
                <button type="button" onClick={this.handleAddMenuItem}>Добавить элемент меню</button>
            </div>
        );
    }
}