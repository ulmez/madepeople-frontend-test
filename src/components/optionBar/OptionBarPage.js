import React, { Component } from 'react';
import swedenIcon from '../../icons/sweden-icon.svg';

class OptionBarPage extends Component {
    render() {
        return (
            <div className="option-bar-container">
                <label>Stores</label>
                <label>Login</label>
                <label>
                    <img src={swedenIcon} alt="sweden-icon" />
                    <span>Sweden</span>
                    <span><i className="fa fa-caret-down"></i></span>
                </label>
            </div>
        );
    }
}

export default OptionBarPage;
