import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Country.scss';

export class PartyItem extends Component {

    
    
    render() {
        const countryDetails = this.props.countryDetails
        return (
            <Link to={{
                pathname: `${window.location.pathname}/parties/${this.props.id}`,
                properties: { countryDetails },
            }}>
            <div className="party-item-wrapper">
                <div className="party-item-details-wrapper">
                    <div className="party-item__logo" style={{backgroundImage: `url(${this.props.logo})`}} />

                <h3 className="party-item__party-name">{this.props.name} | {this.props.seats} | {Math.round((this.props.seats / this.props.totalSeats) * 100) + '%'}</h3>
                </div>
            </div>
            </Link>
        )
    }
}

export default PartyItem
