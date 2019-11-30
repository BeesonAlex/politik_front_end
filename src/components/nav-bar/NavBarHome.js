import React, { Component } from 'react';
// import menuIcon from '../../assets/icons/menu.svg';
// import searchIcon from '../../assets/icons/search.svg';
import logoOnWhite from '../../assets/images/logos/Logo.png';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '../drawer/SwipeableDrawer';
import SwipeableSearchDrawer from '../drawer/SwipeableSearchDrawer';
import './NavBarHome.scss';

class NavBarHome extends Component {
    render() {
        // Home NavBar
        return (
            <div className="navbar-background">
            <div className="navbar-wrapper home">
                <div className="navbar__items-wrapper">
                <div className="navbar__hamburger-menu-wrapper">
                    <SwipeableDrawer />
                </div>
                <div className="navbar__logo-wrapper">
                    <Link to="/"><img className="navbar__logo" src={logoOnWhite} alt="logo" /></Link>
                </div>
                <div className="navbar__search-wrapper">
                    <SwipeableSearchDrawer />
                </div>
                </div>
            </div>
            </div>
        )
}
}

export default NavBarHome;
