import React from 'react';
import style from './MenuCard.module.css';

const MenuCard = ({ name, image, price }) => (
    <div className={style.MenuCard} >
        <img src={image} alt={name} width={320} height={240} />
        <p>{name}</p>
        <p>Price: {price}</p>
        
    </div>
);

export default MenuCard;