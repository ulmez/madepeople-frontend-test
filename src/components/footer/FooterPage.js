import React, { Component } from 'react';
import visaIcon from '../../icons/visa-icon.jpg';
import masterCardIcon from '../../icons/mastercard-icon.jpg';
import amexIcon from '../../icons/amex-icon.jpg';
import paypalIcon from '../../icons/paypal-icon.jpg';

class FooterPage extends Component {
    render() {
        return (
            <div className="footer-container">
                <div>
                    <img src={visaIcon} alt="visa-icon"/>
                    <img src={masterCardIcon} alt="mastercard-icon"/>
                    <img src={amexIcon} alt="amex-icon"/>
                    <img src={paypalIcon} alt="paypal-icon"/>
                </div>
                <label>© 2015 Eton All rights reserved.</label>
            </div>
        );
    }
}

export default FooterPage;
