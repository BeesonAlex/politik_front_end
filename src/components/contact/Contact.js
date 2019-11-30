import React, { Component } from 'react';
import Button from '../buttons/Button';
import NavBarHome from '../nav-bar/NavBarHome';
import Footer from '../footer/Footer';
import './Contact.scss';
import { Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <>
            <nav>
                <NavBarHome />
            </nav>
            <main className="main-wrapper">
            <div className="splash-wrapper">
                <div className="splash-content-wrapper">
                <h1 className="splash-hero--title">Contact</h1>
                <h2 className="splash-hero--subheading">beeson.alexander@gmail.com</h2>
                <h2 className="splash-hero--subheading">289.251.5533</h2>
                <h2 className="splash-hero--subheading"><a href="https://www.linkedin.com/in/alexbeeson">linkedin.com/in/alexbeeson</a></h2>
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

export default Contact;