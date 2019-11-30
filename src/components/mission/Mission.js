import React, { Component } from 'react';
import Button from '../buttons/Button';
import NavBarHome from '../nav-bar/NavBarHome';
import Footer from '../footer/Footer';
import './Mission.scss';
import { Link } from 'react-router-dom';

class Mission extends Component {
    render() {
        return (
            <>
            <nav>
                <NavBarHome />
            </nav>
            <main className="main-wrapper">
            <div className="splash-wrapper">
                <div className="splash-content-wrapper">
                <h1 className="splash-hero--title">Politik's Mission</h1>
                <h2 className="splash-hero--subheading">Is to provide you, the voter, unbiased and easy to comprehend data on politics and elections around the world.</h2>
                <Link to="/countries"><Button content="Get Started" /></Link>
                <div className="layout-block" />
                </div>
            </div>
            </main>
            <footer>
                <Footer />
            </footer>
            </>
        )
    }
}

export default Mission;