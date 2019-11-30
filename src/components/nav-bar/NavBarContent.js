import logoOnYellow from '../../assets/images/logos/Logo-for-Yellow.png';
import React, { Component } from 'react';
// import menuIcon from '../../assets/icons/menu-white.svg';
// import searchIcon from '../../assets/icons/search-white.svg';
import { Link } from 'react-router-dom';
import SwipeableDrawerContent from '../drawer/SwipeableDrawerContent';
import SwipeableSearchDrawerContent from '../drawer/SwipeableSearchDrawerContent';
import './NavBarContent.scss';

class NavBarContent extends Component {
    render() {
        return (
            <div className="navbar-content-background">
            <div className="navbar-content-wrapper home">
                <div className="navbar-content__items-wrapper">
                <div className="navbar-content__hamburger-menu-wrapper">
                    <SwipeableDrawerContent />
                </div>
                <div className="navbar-content__logo-wrapper">
                  <Link to="/"><img className="navbar-content__logo" src={logoOnYellow} alt="logo" /></Link>
                </div>
                <div className="navbar-content__search-wrapper">
                    <SwipeableSearchDrawerContent />
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default NavBarContent;