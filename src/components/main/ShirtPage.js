import React, { Component } from 'react';

class ShirtPage extends Component {
    render() {
        return (
            <div>
                <img src={this.props.shirt.image.data} alt={this.props.shirt.image.alt} />
                <label>{this.props.shirt.name}</label>
                <label className="shirt-fit-price">{this.props.shirt.fit} / {this.props.shirt.price} SEK</label>
            </div>
        );
    }
}

export default ShirtPage;
