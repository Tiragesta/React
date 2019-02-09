import React, {Component} from 'react';

import * as API from '../services/api';

export default class MenuItemPage extends Component{
    state={
        id: null,
        name: null,
        description: null,
        image: null,
        price: null,
        category: null,
        ingredients: null, 
        
    }

    componentDidMount(){
        API.getMenuItemById(this.props.match.params.id)
        .then(item => this.setState({...item}));
    }

    handleGoBack = () => {
        const { state } = this.props.location;
        //const { category } = this.state;
       
        if(state){
             return this.props.history.push(state.from);
        }
        this.props.history.push({
            pathname: '/menu',
            search: `?category=${this.state.category}`
        });
    };

    render(){
        const { name, description, image, price, category, ingredients } = this.state;
        return(
            <div>
                <article>
                    <h2>{name}</h2>
                    <h4>{category}</h4>
                    <p>{description}</p>
                    <img src={image} alt={name} width={320} height={240}/>
                    <p>{price}</p>
                    <p>{description}</p>
                    <p>{ingredients}</p>
                </article>
                
                <button onClick={this.handleGoBack}>Go back</button>
                <button >Добавить в корзину</button>
            </div>
        );
    }
}

