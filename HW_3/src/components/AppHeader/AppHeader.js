import React from 'react';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import appLogo from './assets/logo.jpg';
//import UserMenu from '../UserMenu/UserMenu';
import styles from './AppHeader.module.css';
import AuthManager from '../UserMenu/AuthManager';

import navItems from '../../configs/main-nav';

const AppHeader = () =>
 
    <header className={styles.header}>
            <div className={styles.logo}>
                <Logo image={appLogo}/>
            </div>
            <div className="menu"><Navigation items={navItems}/></div>
            
            <AuthManager />
    </header>

export default AppHeader;
