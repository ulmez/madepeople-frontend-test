import React, { Component } from 'react';
import briefcaseIcon from '../../icons/briefcase-icon.svg';
// import imageOne from '../../icons/image-1.jpg';
// import MainPage from '../main/MainPage';

class HeaderPage extends Component {
    render() {
        return (
            <header>
                <div className="top-headline">
                    <div className="eton-headline-text">ETON</div>
                    <div className="shopping-basket-headline-text">
                        <img src={briefcaseIcon} alt="briefcase-icon" />
                        <label>0 SEK</label>
                    </div>
                </div>
                <hr />
                <div className="menu-headline">
                    <div>SHIRTS</div>
                    <div>ACCESSORIES</div>
                    <div>OUR WORLD</div>
                </div>
                {/* <MainPage /> */}
            </header>
        );
    }
}

export default HeaderPage;
