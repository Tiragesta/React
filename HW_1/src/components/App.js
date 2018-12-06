import React, { Component } from 'react';
import v4 from 'uuid/v4';
import SignInForm from './SignInForm';
import SignupForm from './SignupForm';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
//import NoteFilter from './NoteFilter';
import OrderTable from './OrderTable';
import AppHeader from './AppHeader';
import DishCard from './DishCard';
import DishFilter from './DishFilter';

//import Modal from './Modal';


import data from '../data/order-history.json';
import dataDish from '../data/menu.json';

/*const filterNotes = (filter, notes) => {
    return notes.filter(note => note.text.toLowerCase().includes(filter.toLowerCase()));
}*/
const filterDish = (filter, dishes) => {
    return dishes.filter(dish => dish.name.toLowerCase().includes(filter.toLowerCase()));
} 

export default class App extends Component {
    state = {
        notes: [],
        order: data,
        dishes: dataDish,
        filter: ''
    };

    handleAddNote = text => {
        this.setState((prevState) => ({
            notes: [{ id: v4(), text }, ...prevState.notes]
        }));
    };
    
   /* handleDeleteNote = id => {
        this.setState((prevState) => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }))
    }*/

    /*handleFilterChange = e => {
        console.log(e);

        this.setState({
            filter: e.target.value
        });
    }*/
    handleDishFilterChange = e => {
        //console.log(e);
        this.setState({
            filter: e.target.value
        });
    }

    render(){
        const {notes, filter, dishes, order } = this.state;

        

        const filteredDishes = filterDish(filter, dishes);


        return(
            <div>
                <AppHeader />
                <br/>
                <SignInForm />
                <SignupForm />
                <NoteEditor onSubmit={this.handleAddNote}/>
                <NoteList notes={notes} onDeleteNote={this.handleDeleteNote}/>
            
                <OrderTable order={order}/>

                <DishFilter filter={filter} data = {filterDish} onDishFilterChange={this.handleDishFilterChange}/>
                <DishCard dishes = {filteredDishes}/>

                
        
            </div>
        );
    }
}