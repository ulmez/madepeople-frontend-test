import React, { Component } from 'react';
import imageOne from '../../icons/image-1.jpg';
import HeadCollectionInfo from './HeadCollectionInfo';
import CollectionInfo from './CollectionInfo';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collectionList: [
                {
                    title: 'The Essentials',
                    info: 'Curabitur blandit tempus porttitor',
                    image: {
                        data: imageOne,
                        alt: 'test-one'
                    }
                },
                {
                    title: 'Closet No 6',
                    info: 'Donec id elit non mi porta gravida at eget metus',
                    image: {
                        data: imageOne,
                        alt: 'test-two'
                    }
                },
                {
                    title: 'Closet No 14',
                    info: 'Euismod aenean inceqtos bibendum',
                    image: {
                        data: imageOne,
                        alt: 'test-three'
                    }
                }
            ]
        };
    }

    render() {
        return (
            <main>
                <HeadCollectionInfo />
                {this.state.collectionList.map((collection, index) => (
                    <CollectionInfo key={index} collection={collection} />
                ))}
            </main>
        );
    }
}

export default MainPage;
