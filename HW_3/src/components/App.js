import React from 'react';

//import v4 from 'uuid/v4';
import { Route, Switch } from 'react-router-dom';

import AppHeader from './AppHeader/AppHeader';
import MenuPage from '../pages/Menu';
import MenuItemPage from '../pages/MenuItem';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import DeliveryPage from '../pages/Delivery';
import NewMenuItemPage from '../pages/NewMenuItem';
import routes from '../configs/routes';

const App = ( ) => (
    <div>
        <AppHeader />
        <Switch>
            <Route exact path={routes.MENU} component={MenuPage} />
            <Route path={routes.MENU_ITEM} component={MenuItemPage} />
            <Route path={routes.NEW_MENU_ITEM} component={NewMenuItemPage} />
            <Route path={routes.ABOUT} component={AboutPage} />
            <Route path={routes.CONTACT} component={ContactPage} />
            <Route path={routes.DELIVERY} component={DeliveryPage} />
        </Switch>
        
    </div>
)

export default App;