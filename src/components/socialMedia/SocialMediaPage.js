import React, { Component } from 'react';

class SocialMediaPage extends Component {
    render() {
        return (
            <div className="social-media-group-container">
                <div className="email-container">
                    <div>
                        <input type="text" name="email" placeholder="Your email" />
                        <span><span>SUBSCRIBE</span></span>
                    </div>
                </div>
                <div className="social-media-container">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-pinterest-p"></i>
                    <i className="fa fa-twitter"></i>
                </div>
            </div>
        );
    }
}

export default SocialMediaPage;
