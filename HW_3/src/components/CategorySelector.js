import React from 'react';

const styles = {
  select: {
    fontSize: 20
  }
};

const CategorySelector = ({ options,  onChange }) => (
  <select
    style={styles.select}
    //value={value}
    onChange={event => onChange(event.target.value)}
  >
    {
        options.map(option => (
      <option key={option.id} >
        {option.name}
      </option>
    ))}
  </select>
);

export default CategorySelector;