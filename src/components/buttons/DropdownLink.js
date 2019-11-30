import React, { Component } from 'react';
import './Buttons.scss';

export class DropdownLink extends Component {
    render() {
        return (
            <div className="dropdown-link">
            <img className="dropdown-link__image" src={this.props.arrayObject.flag || this.props.arrayObject.smLogo} alt="region-flag" />
            <p className="dropdown-link__name">{this.props.arrayObject.name}</p>
            </div>
        )
    }
}

export default DropdownLink
