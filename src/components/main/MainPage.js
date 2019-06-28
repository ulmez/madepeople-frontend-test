import React, { Component } from 'react';
import theEssentials from '../../icons/the-essentials.jpg';
import closetNo6 from '../../icons/closet-no-6.jpg';
import closetNo14 from '../../icons/closet-no-14.jpg';
import solidBlackDressShirt from '../../icons/solid-black-dress-shirt.jpg';
import blueIndigoCasualShirt from '../../icons/blue-indigo-casual-shirt.jpg';
import johnClarkPrintShirt from '../../icons/john-clark-print-shirt.jpg';
import redMicroDotsShirt from '../../icons/red-micro-dots-shirt.jpg';
import navyCatPrintShirt from '../../icons/navy-cat-print-shirt.jpg';
import lightBlueTwillShirt from '../../icons/light-blue-twill-shirt.jpg';
import HeadCollectionInfo from './HeadCollectionInfo';
import CollectionInfo from './CollectionInfo';
import ShirtPage from './ShirtPage';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collectionList: [
                {
                    title: 'The Essentials',
                    info: 'Curabitur blandit tempus porttitor',
                    image: {
                        data: theEssentials,
                        alt: 'test-one'
                    }
                },
                {
                    title: 'Closet No 6',
                    info: 'Donec id elit non mi porta gravida at eget metus',
                    image: {
                        data: closetNo6,
                        alt: 'closet-no-6'
                    }
                },
                {
                    title: 'Closet No 14',
                    info: 'Euismod aenean inceqtos bibendum',
                    image: {
                        data: closetNo14,
                        alt: 'closet-no-14'
                    }
                }
            ],
            shirtList: [
                {
                    name: 'Solid Black Dress Shirt',
                    fit: 'SUM FIT',
                    price: 1295,
                    image: {
                        data: solidBlackDressShirt,
                        alt: 'solid-black-dress-shirt'
                    }
                },
                {
                    name: 'Blue Indigo Casual Shirt',
                    fit: 'SUPER SUM FIT',
                    price: 1295,
                    image: {
                        data: blueIndigoCasualShirt,
                        alt: 'blue-indigo-casual-shirt'
                    }
                },
                {
                    name: 'John Clark Print Shirt',
                    fit: 'SUM FIT',
                    price: 1295,
                    image: {
                        data: johnClarkPrintShirt,
                        alt: 'john-clark-print-shirt'
                    }
                },
                {
                    name: 'Red Micro Dots Shirt',
                    fit: 'CLASSIC FIT',
                    price: 1295,
                    image: {
                        data: redMicroDotsShirt,
                        alt: 'red-micro-dots-shirt'
                    }
                },
                {
                    name: 'Navy Cat Print Shirt',
                    fit: 'SUM FIT',
                    price: 1295,
                    image: {
                        data: navyCatPrintShirt,
                        alt: 'navy-cat-print-shirt'
                    }
                },
                {
                    name: 'Light Blue Twill Shirt',
                    fit: 'CONTEMPORARY FIT',
                    price: 1295,
                    image: {
                        data: lightBlueTwillShirt,
                        alt: 'light-blue-twill-shirt'
                    }
                }
            ]
        };
    }


    // <img src={solidBlackDressShirt} alt="solid-black-dress-shirt" />
    //             </div>
    //             <div>
    //                 <img src={blueIndigoCasualShirt} alt="blue-indigo-casual-shirt" />
    //             </div>
    //             <div>
    //                 <img src={johnClarkPrintShirt} alt="john-clark-print-shirt" />
    //             </div>
    //             <div>
    //                 <img src={redMicroDotsShirt} alt="red-micro-dots-shirt" />
    //             </div>
    //             <div>
    //                 <img src={navyCatPrintShirt} alt="navy-cat-print-shirt" />
    //             </div>
    //             <div>
    //                 <img src={lightBlueTwillShirt} alt="light-blue-twill-shirt" />

    render() {
        return (
            <main>
                <HeadCollectionInfo />
                {this.state.collectionList.map((collection, index) => (
                    <CollectionInfo key={index} collection={collection} />
                ))}
                <div className="shirt-container">
                    {this.state.shirtList.map((shirt, index) => (
                        <ShirtPage key={index} shirt={shirt} />
                    ))}
                </div>
            </main>
        );
    }
}

export default MainPage;
