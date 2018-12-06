import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import appLogo from './logo.jpg';
import UserMenu from './UserMenu';

const navItems = ['menu', 'about', 'contact', 'delivery']

const AppHeader = () => 
    <header className="Header">
        <div className="Header__logo">
            <Logo image={appLogo}/>
        </div>
        <div className="menu"><Navigation item={navItems}/></div>
       <div className="Header__usermenu"><UserMenu/></div>
    </header>

export default AppHeader;
