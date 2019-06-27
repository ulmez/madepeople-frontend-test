import React, { Component } from 'react';

class CollectionInfo extends Component {
    render() {
        return (
            <div className="main-collection-container">
                <img src={this.props.collection.image.data} alt={this.props.collection.image.alt} />
                <label className="main-collection-title">{this.props.collection.title}</label>
                <label className="main-collection-info">{this.props.collection.info}</label>
            </div>
        );
    }
}

export default CollectionInfo;
