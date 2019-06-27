import React, { Component } from 'react';
import imageOne from '../../icons/image-1.jpg';

class HeadCollectionInfo extends Component {
    render() {
        return (
            <div className="main-top-container">
                <img src={imageOne} alt="test-one" />
                <label className="main-top-title">Spring / Summer 16</label>
                <label className="main-top-info">Maccenas sed diam eget risus varius blandit sit amet non magna. Maccenas sed diam eget risus varius blandit sit amet non magna.</label>
                <span className="main-top-button">EXPLORE COLLECTION</span>
            </div>
        );
    }
}

export default HeadCollectionInfo;
