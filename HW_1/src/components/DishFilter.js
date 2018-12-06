import React from 'react';

const DishFilter = ({filter, onDishFilterChange}) => (
    <input type="text" value={filter} onChange={onDishFilterChange} placeholder="Поиск" autoFocus/>
);

export default DishFilter;