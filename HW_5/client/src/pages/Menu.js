import React, {Component} from 'react';
import { compose } from 'redux';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {getMenuAsync} from '../redux/menu/operationMenu';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import CategorySelector from '../modules/CategorySelector/CategorySelector';
import * as API from '../services/api';
import routes from '../configs/routes';
import * as selectors from '../redux/menu/selectorsMenu';
import MenuGrid from '../modules/menu/MenuContainer';
import * as actions from '../redux/actions';

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
      const { addToCart} = this.props;

      return (
        <div>

        {/*<Link to={`${routes.NEW_MENU_ITEM}`}><button>Add</button></Link>*/}
        
            <CategorySelector 
              options={categories}
              onChange={this.handleCategoryChange}
            />
            {menu.length > 0 && <MenuGrid items={menu} addToCart={addToCart} />}
        </div>
      );
}};

/*const mapStateToProps = state => ({
  //categories: selectors.selectCategories(state),
  currentCategiry: selectors.selectCurrentMenuCategoryName(state),
  menuItems: selectors.getMenuIds(state),
});

const mapDispatchToProps = {
  getMenuItems: getMenuAsync,
  addToCart: actions.addToCart,
  removeFromCart: actions.removeFromCart,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(MenuPage);*/

