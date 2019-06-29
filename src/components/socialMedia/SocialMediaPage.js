import React, { Component } from 'react';

class SocialMediaPage extends Component {
    render() {
        return (
            <div className="social-media-container">
                <div>
                    <input type="text" name="email" placeholder="Your email" />
                    <span><span>SUBSCRIBE</span></span>
                </div>
            </div>
        );
    }
}

export default SocialMediaPage;
