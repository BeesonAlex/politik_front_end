import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './CountrySelect.scss';

export class NextCountryItem extends Component {
    render() {
        return (
            <Link to={{
                pathname: `/countries/${this.props.id}`,
            }}>
            <div className="country-item-wrapper">
                <div className="country-item-flag-wrapper">
                    <div className="country-item__flag" style={{backgroundImage: `url(${this.props.flag})`}} />
                </div>
                <div className="country-item-details-wrapper">
                <h3 className="country-item__country-name">{this.props.name}</h3>
                <div className="country-item-details__system-region-wrapper">
                <p className="country-item__details--partysystem">{this.props.partySystem} | {this.props.subRegions} Sub-Regions</p>
                </div>
                </div>
            </div>
            </Link>
        )
    }
}

export default NextCountryItem
