import React, { Component } from 'react';

class HeaderPage extends Component {
    render() {
        return (
            <header id="navbar">
                <div className={"top-headline-container " + (this.props.activeMenu ? 'active-menu-design' : '')}>
                    <div className={"top-headline " + (this.props.activeMenu ? 'less-transparency bottom-border-transparency' : '')}>
                        <div className="eton-headline-text">ETON</div>
                        <div className="shopping-basket-headline-text">
                            <label className={this.props.activeMenu ? 'briefcase-icon-white' : 'briefcase-icon-black'}></label>
                            <label>0 SEK</label>
                        </div>
                    </div>
                </div>
                <div id="topSearchField" className={"top-search-field " + (this.props.activeMenu ? 'active-menu-design padding-top-fix transition-height-search-field' : 'start-height')}>
                    <label><i className="fa fa-search"></i></label>
                    <input id="searchBoxTextField" type="text" />
                </div>
                <div id="menuHeadlineContainer" className={"menu-headline " + (this.props.activeMenu ? 'active-menu-design less-transparency' : '')}>
                    <div id="shirts">SHIRTS</div>
                    <div id="accessories" className={this.props.activeMenu ? 'transparency' : ''}>ACCESSORIES</div>
                    <div id="ourWorld" className={this.props.activeMenu ? 'transparency' : ''}>OUR WORLD</div>
                </div>
                <div id="menuMainContainer" className={(this.props.activeMenu ? 'active-menu-design transition-height padding-bottom-fix' : 'start-height')}>
                    <div className="menu-container">
                        <div>
                            <div className="menu-sub-title">BODY FIT</div>
                            <div>Super Slim</div>
                            <div>Slim</div>
                            <div>Contemporary</div>
                            <div>Classic</div>
                            <div>Extra Long Sleeve</div>
                        </div>
                        <div>
                            <div>All Shirts</div>
                            <div>New Arrivals</div>
                            <div>White Shirts</div>
                            <div className="menu-spacer">Outlet</div>
                            <div>Size Guide</div>
                            <div>Eton Express</div>
                        </div>
                    </div>
                    <div className="menu-container">
                        <div>
                            <div className="menu-sub-title">COLLECTION</div>
                            <div>Red Ribbon</div>
                            <div>Green Ribbon</div>
                            <div>Black Ribbon</div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderPage;
