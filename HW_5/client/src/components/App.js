import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
//import { SignIn, SignUp } from '../pages';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp'
import AppHeader from './AppHeader/AppHeader';
import * as operations from '../redux/operations';
//import Profile from '../pages/Profile';
//import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import MenuPage from '../pages/Menu';
import MenuItemPage from '../pages/MenuItem';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import DeliveryPage from '../pages/Delivery';
import NewMenuItemPage from '../pages/NewMenuItem';
//import Dashboard from '../pages/Dashboard';
import routes from '../configs/routes';
//import Header from '../components/Header/Header';

import Cart from '../modules/cart/CartContainer';
//import Dishes from '../modules/menu/MenuContainer';

class App extends Component {
    componentDidMount(){
        //this.props.refreshCurrentUser();
    }

    render(){
        return (
            <div>
                <AppHeader />
                
                <Switch>
                    <Route exact path={routes.MENU} component={MenuPage} />
                    <Route path={routes.MENU_ITEM} component={MenuItemPage} />
                    <Route path={routes.NEW_MENU_ITEM} component={NewMenuItemPage} />
                    <Route path={routes.ABOUT} component={AboutPage} />
                    <Route path={routes.CONTACT} component={ContactPage} />
                    <Route path={routes.DELIVERY} component={DeliveryPage} />
                    <Route path={routes.CART} component={Cart} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                </Switch>
            </div>
        );
    }
}

export default connect(
    null,
    //{refreshCurrentUser: operations.refreshCurrentUser}
)(App);