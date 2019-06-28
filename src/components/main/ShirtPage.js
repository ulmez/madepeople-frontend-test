import React, { Component } from 'react';
// import solidBlackDressShirt from '../../icons/solid-black-dress-shirt.jpg';
// import blueIndigoCasualShirt from '../../icons/blue-indigo-casual-shirt.jpg';
// import johnClarkPrintShirt from '../../icons/john-clark-print-shirt.jpg';
// import redMicroDotsShirt from '../../icons/red-micro-dots-shirt.jpg';
// import navyCatPrintShirt from '../../icons/navy-cat-print-shirt.jpg';
// import lightBlueTwillShirt from '../../icons/light-blue-twill-shirt.jpg';

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