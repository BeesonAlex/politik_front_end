import React, { Component } from 'react';
import Button from '../buttons/Button';
import './Splash.scss';
import { Link } from 'react-router-dom';

class Splash extends Component {
    render() {
        return (
            <div className="splash-wrapper">
                <div className="splash-content-wrapper">
                <h1 className="splash-hero--title">Learn. Engage. Vote</h1>
                <h2 className="splash-hero--subheading">A platform for the modern voter</h2>
                <Link to="/countries"><Button content="Get Started" /></Link>
                <div className="layout-block" />
                </div>
            </div>
        )
    }
}

export default Splash;