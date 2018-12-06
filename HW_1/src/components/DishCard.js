import React from 'react';

const DishCard = ({dishes}) => (
    <ul className="menu">
        {dishes.map(dish => (
            <li className="dishCard" key={dish.id}>
                <img className="dish__image" src={dish.image} alt=""/>
                <h2>{dish.name}</h2>
                <p>{dish.price}</p>
                <p>{dish.description}</p>
                <p>{dish.ingredients}</p>
            </li>
        ))}
        
    </ul>

);

export default DishCard;