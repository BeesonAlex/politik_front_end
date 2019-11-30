import React, { Component } from 'react';
import NavBarContent from '../nav-bar/NavBarContent';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import Dropdown from '../buttons/DropDown';
import Button from '../buttons/Button';
import alertIcon from '../../assets/icons/alert-circle.svg'
import './Party.scss';
import axios from 'axios';

export class Party extends Component {

    state = {
        partyDetails: {
            platform: {
                socialIssues: [],
                immigration: [],
                domesticPolicy: [],
                healthcare: [],
                environment: [],
                economy: [],
                electoralIssues: [],
                education: [],
                foreignPolicy: [],
                science: [],
                crime: [],
                nationalSecurity: [],
                infrastructureTransportation: [],
            },        
        },
        countryDetails: {
            parties: [],
            subRegionNames: [],
        },
        pathName: "",
    }


    componentDidMount() {

        
        axios.get(`http://localhost:8080/data/${window.location.pathname}`)
        .then(response => {
            this.setState({
                partyDetails: response.data,
            })
            
            //
                axios.get(`http://localhost:8080/data/countries/${this.state.partyDetails.countryId}`)
                .then(response => {
                    this.setState({
                        countryDetails: response.data,
                    })
                    this.setState({
                        pathName: window.location.pathname,
                    })

                })
                .catch(error => {
                    console.log(error)
                })
            //
        })
        .catch(error => {
            console.log(error)
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(window.location.pathname !== prevState.pathName) {
        
        axios.get(`http://localhost:8080/data/${window.location.pathname}`)
        .then(response => {
            this.setState({
                partyDetails: response.data,
            })
            
            //
                axios.get(`http://localhost:8080/data/countries/${this.state.partyDetails.countryId}`)
                .then(response => {
                    this.setState({
                        countryDetails: response.data,
                    })
                    this.setState({
                        pathName: window.location.pathname,
                    })

                })
                .catch(error => {
                    console.log(error)
                })
            //
        })
        .catch(error => {
            console.log(error)
        })
        }
    }
    
    
    render() {

        let key = 0
        const createKey = () => {
            return key++;
        }
        return (
            <>
            <NavBarContent />
            <div className="party-wrapper">
                <div className="party__hero-section" style={{backgroundColor:this.state.partyDetails.primaryColour}}>
                    <div className="party__jurisdiction-dropdown-wrapper">
                        <p className="party__jurisdiction">{this.state.countryDetails.jurisdiction}</p>
                        <Dropdown content="Parties" array={this.state.countryDetails.parties} linkPath={`/countries/${this.state.countryDetails.id}/parties`} />
                    </div>
                </div>
                    <div className="party__hero-section__logo-frame">
                        <img className="party__hero-section__logo" src={this.state.partyDetails.smLogo} alt="party-logo" />
                    </div>
            <div className="party__top-info-wrapper">
            <h1 className="party__name">{this.state.partyDetails.name} Party</h1>
            <Link to={`${window.location.pathname}/budget`}><Button content="Budget" /> </Link>
            </div>
            <div className="party__party-details-wrapper">
            <div className="party__portrait-title-wrapper">
            <div className="party__party-details__portrait-frame" style={{backgroundImage:`url(${this.state.partyDetails.leaderPortrait})`}} />
            <h1 className="party__party-details--title">Info</h1>
            </div>
            <div className="party__party-details__info-wrapper">
            <h2 className="party__party-details--subheading">Leader:</h2>
            <p className="party__party-details--info">{this.state.partyDetails.leader}</p>
            </div>
            <div className="party__party-details__info-wrapper">
            <h2 className="party__party-details--subheading">Founded:</h2>
            <p className="party__party-details--info">{this.state.partyDetails.founded}</p>
            </div>
            <div className="party__party-details__info-wrapper">
            <h2 className="party__party-details--subheading">Position:</h2>
            <p className="party__party-details--info">{this.state.partyDetails.position}</p>
            </div>
            <div className="party__party-details__info-wrapper">
            <h2 className="party__party-details--subheading">Current Seats:</h2>
            <p className="party__party-details--info">{this.state.partyDetails.seats}</p>
            </div>
            <div className="party__party-details__info-wrapper">
            <h2 className="party__party-details--subheading">Headquarters:</h2>
            <p className="party__party-details--info">{this.state.partyDetails.headquarters}</p>
            </div>

            </div>    
            <div className="party__party-platform-wrapper">
                <h1 className="party__party-platform__title">Party Platform</h1>

            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">Social Issues</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.socialIssues.length > 0 ?  
                        this.state.partyDetails.platform.socialIssues.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    : <div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>
            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">Immigration</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.immigration.length > 0 ?  
                        this.state.partyDetails.platform.immigration.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    : <div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>
            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">Domestic Policy</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.domesticPolicy.length > 0 ?  
                        this.state.partyDetails.platform.domesticPolicy.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    : <div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>
            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">Healthcare</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.healthcare.length > 0 ?  
                        this.state.partyDetails.platform.healthcare.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    : <div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>
            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">Environment</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.environment.length > 0 ?  
                        this.state.partyDetails.platform.environment.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    : <div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>
            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">Economy</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.economy.length > 0 ?  
                        this.state.partyDetails.platform.economy.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    : <div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>
            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">Electoral Issues</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.electoralIssues.length > 0 ?  
                        this.state.partyDetails.platform.electoralIssues.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    : <div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>
            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">Education</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.education.length > 0 ?  
                        this.state.partyDetails.platform.foreignPolicy.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    : <div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>
            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">Science</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.science.length > 0 ?  
                        this.state.partyDetails.platform.science.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    : <div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>
            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">Crime</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.crime.length > 0 ?  
                        this.state.partyDetails.platform.crime.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    : <div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>
            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">National Security</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.nationalSecurity.length > 0 ?  
                        this.state.partyDetails.platform.nationalSecurity.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    : <div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>
            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">Infrastructure and Transportation</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.infrastructureTransportation.length > 0 ?  
                        this.state.partyDetails.platform.infrastructureTransportation.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    : <div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>
            <div className="party__party-platform__tenet-wrapper">
                <h2 className="party__party-platform__tenet-title">Social Issues</h2>
                <ul className="party__party-platform__tenet-list">
                    {
                        this.state.partyDetails.platform.socialIssues ?  
                        this.state.partyDetails.platform.socialIssues.map( issue => {
                        return <li key={createKey()} className="party__party-platform__tenet-list-item">{issue}</li>
                    })
                    :<div className="negative-holder"><img className="alert-icon" src={alertIcon} alt="alert-icon" /><p className="ternary-negative-result">The party has not released a platform for this issue.</p></div>
                    }
                </ul>
            </div>



            
            </div>
            </div>
            <Footer />
            </>
        )
    }
}

export default Party
