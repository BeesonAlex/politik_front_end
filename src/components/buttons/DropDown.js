import React, { Component } from 'react'
import DropdownLink from './DropdownLink';
import { Link } from 'react-router-dom';
import chevronDownIcon from '../../assets/icons/chevron-down.svg';
import './Buttons.scss';

export class DropDown extends Component {
    render() {
        return (
            <div className="dropdown-button-wrapper">
                <button className="dropdown-button">{this.props.content} <img className="dropdown-button__icon" src={chevronDownIcon} alt="dropdown-button-icon" /></button>
                <div className="dropdown-content-wrapper">
                {this.props.array.map(item => {
                    return <Link key={item.id} to={`${this.props.linkPath}/${item.id}`}><DropdownLink key={item.id} id={item.id} arrayObject={item} /></Link>
                })}
                </div>
            </div>
        )
    }
}

export default DropDown
