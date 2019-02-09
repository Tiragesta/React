import React from 'react';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import appLogo from './assets/logo.jpg';
//import UserMenu from '../UserMenu/UserMenu';
import styles from './AppHeader.module.css';
//import AuthManager from '../UserMenu/AuthManager';
import Header from '../Header/Header';

import navItems from '../../configs/main-nav';

//import CartIcon from '../../modules/cartIcon/CartIconContainer';

const AppHeader = () =>
 
    <header className={styles.header}>
            <div className={styles.logo}>
                <Logo image={appLogo}/>
            </div>
            <div className="menu"><Navigation items={navItems}/></div>
            
            <Header />
           {/* <CartIcon />*/}
            
    </header>

export default AppHeader;
