import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({images}) => {
    const pics = images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    })

    return (
        <div className="img-list">{pics}</div>
    )
}

export default ImageList;