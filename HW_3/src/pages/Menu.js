import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import CategorySelector from '../components/CategorySelector';
import * as API from '../services/api';
import routes from '../configs/routes';


import MenuGrid from '../modules/menu/MenuGrid';

const getCategoryFromProps = props => queryString.parse(props.location.search).category;


export default class MenuPage extends Component {
    state={
      menu: [],
      categories: []
    }

    componentDidMount(){
      API.getCategories().then(categories => this.setState({categories}));

      const category = getCategoryFromProps(this.props);

      if(!category) {
        return this.props.history.replace({
          pathname: this.props.location.pathname,
          search: 'category=soup'
        });
      }
      this.getMenuItems(category);
      API.getMenuItemsWithCategory(category).then(menu => this.setState({menu}),);
      API.getAllMenuItems().then(menu => this.setState({menu}));
      
    }

    componentDidUpdate(prevProps){
      const prevCategory = getCategoryFromProps(prevProps);
      const nextCategory = getCategoryFromProps(this.props);


      console.log('prevCategory: ', prevCategory);
      console.log('nextCategory: ', nextCategory);

      if(prevCategory === nextCategory) return;

        this.getMenuItems(nextCategory);
      
    
    }
    getMenuItems = category => {
      API
      .getMenuItemsWithCategory(category)
      .then(menu => this.setState({menu}))
    };
    

    handleCategoryChange = category => {
        this.props.history.push({
        pathname: this.props.location.pathname,
        search: `category=${category}`,
      });
    }

    render(){
      const { categories } = this.state;
      const { menu } = this.state;

      return (
        <div>

        <Link to={`${routes.NEW_MENU_ITEM}`}><button>Add</button></Link>
          <hr/>
            <CategorySelector 
              options={categories}
              onChange={this.handleCategoryChange}
            />
            {menu.length > 0 && <MenuGrid items={menu} />}
        </div>
      );
  
}}
