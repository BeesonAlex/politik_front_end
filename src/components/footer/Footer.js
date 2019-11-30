import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../App.scss';
import './Footer.scss';
import footerGraphic from '../../assets/images/logos/footer-graphic.png';
import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import instagramIcon from '../../assets/icons/instagram.svg';

class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <img className="footer__graphic" src={footerGraphic} alt="logo" />
                <div className="footer__title-wrapper">
                <h1 className="footer-title">Vote Smarter.</h1>
                <div className="footer__content__social-wrapper">
                    <img src={twitterIcon} className="social-icon" alt="social-icon" />
                    <img src={facebookIcon} className="social-icon" alt="social-icon" />
                    <img src={instagramIcon} className="social-icon" alt="social-icon" />
                </div>
                </div>   
                    <div className="footer__content__link-wrapper">
                        <Link to="/"><h3 className="link">Home</h3></Link>
                        <Link to="/countries"><h3 className="link">Countries</h3></Link>
                        <Link to="/Mission"><h3 className="link">Mission</h3></Link>
                        <Link to="/Contact"><h3 className="link">Contact</h3></Link>
                    </div>  
                 </div> 
        )
    }
}

export default Footer
