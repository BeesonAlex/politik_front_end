import React, { Component } from 'react'
import axios from 'axios';
import Dropdown from '../buttons/DropDown';
import './Country.scss'
import NavBarContent from '../nav-bar/NavBarContent';
import Footer from '../footer/Footer';
import Doughnut from '../charts/Doughnut';
import PartyItem from './PartyItem';
import { GridLoader } from 'react-spinners';

export class Country extends Component {

    state = {
        countryDetails: {
            parties: [],
            subRegionNames: [],
        },

        representationData: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [],
                hoverBackgroundColor: [],
                hoverBorderColor: "#231F20"
            }]
        },
        isLoading: true,

    }

    componentDidMount() {

        const { id } = this.props.match.params

        axios.get(`http://localhost:8080/data/countries/${id}`)
            .then(response => {
                this.setState({
                    countryDetails: response.data,
                })
                this.setState({
                    representationData: {

                        labels: this.state.countryDetails.parties.map(party => {
                            return party.name;
                        }),
                        datasets: [{
                            data: this.state.countryDetails.parties.map(party => {
                                return party.seats;
                            }),
                            backgroundColor: this.state.countryDetails.parties.map(party => {
                                return party.primaryColour;
                            }),
                            hoverBackgroundColor: this.state.countryDetails.parties.map(party => {
                                return party.primaryColour;
                            }),
                        }],
                    },
                })
                this.setState({
                    isLoading: false,
                })

            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        if (this.state.isLoading) {

            return (
            <>
            <NavBarContent />
            <div className="loader">
            <GridLoader />
            </div>
            </>
            )

        } else {
            return (
                <>
                    <NavBarContent />

                    <div className="country-wrapper">
                        <div className="country__hero-section" style={{ backgroundImage: ` linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%), url(${this.state.countryDetails.parliamentImage})` }}>
                            <div className="country-hero-section-details-wrapper">
                                <div className="country-hero-section-text-wrapper">
                                    <h1 className="country-hero-section__name">{this.state.countryDetails.name}</h1>
                                    <p className="country-hero-section__type">{this.state.countryDetails.governmentType}</p>
                                </div>
                                <img className="country-hero-section__flag" src={this.state.countryDetails.flag} alt="country-flag" />
                            </div>
                        </div>
                        <div className="country__top-info-wrapper">
                            <div className="country__top-info__jurisdictionregions">
                                <p className="next-election-date--jurisdiction">{this.state.countryDetails.jurisdiction}</p>
                                <Dropdown content="Regions" linkPath="/countries" array={this.state.countryDetails.subRegionNames} />
                            </div>
                            <div className="country__top-info__election-date-wrapper">
                                <p className="next-election-date--label">Next Election Date:</p>
                                <p className="next-election-date--date">{this.state.countryDetails.nextElectionDate}</p>
                            </div>
                        </div>
                        <div className="country__parliament-wrapper">
                            <h1 className="country__parliament__title">{this.state.countryDetails.parliamentName}</h1>
                            <div className="country__parliament-details-wrapper">
                                <h2 className="country__parliament__subheading">Total Number of Seats</h2>
                                <p className="content--loud">{this.state.countryDetails.seats}</p>
                            </div>

                        </div>
                        <div className="country__parliament-wrapper">
                            <h1 className="country__parliament__title">Seat Breakdown </h1>
                            <Doughnut data={this.state.representationData} title="" height={20} width={20} />
                        </div>
                        <div className="country__parties-wrapper">
                            <h1 className="country__parliament__title">Parties</h1>
                            {this.state.countryDetails.parties.map(party => {
                                return <PartyItem countryDetails={this.state.countryDetails} key={party.id} id={party.id} logo={party.smLogo} name={party.name} seats={party.seats} totalSeats={this.state.countryDetails.seats} />
                            })}
                        </div>

                    </div>
                    <Footer />
                </>
            )
        }
    }
}


export default Country
