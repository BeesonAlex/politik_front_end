import React, { Component } from 'react';
import NavBarHome from '../nav-bar/NavBarHome';
import Splash from '../splash/Splash';
import Footer from '../footer/Footer';
import './Home.scss';
import '../../App.scss';

class Home extends Component {
    render() {
        return (
            <>
            <nav>
            <NavBarHome />
            </nav>
            <main className="main-wrapper">
            <Splash />
            </main>
            <footer>
            <Footer />
            </footer>
            </>
        )
    }
}

export default Home;
