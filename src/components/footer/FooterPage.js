import React, { Component } from 'react';
import visaIcon from '../../icons/visa-icon.png';
import masterCardIcon from '../../icons/mastercard-icon.png';
import amexIcon from '../../icons/amex-icon.png';
import paypalIcon from '../../icons/paypal-icon.png';

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
