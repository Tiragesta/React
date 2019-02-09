import React from 'react';
//import { compose } from 'redux';
//import { connect } from 'react-redux';
//import { onChange } from '../../redux/actions';
//import withRenderLog from '../../hoc/withRenderLog';
import styles from './CategorySelector.module.css';




const CategorySelector = ({ options,  onChange }) => (
  <select
    className={styles.select}
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

/*const mapState = state => ({

});*/

//const mapDispatch = { onChange };

/*export default compose(
  connect(
    mapState,
    mapDispatch,
  ),
  withRenderLog
) (CategorySelector);*/

export default CategorySelector