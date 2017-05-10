import React from 'react';
import uniqueId from 'lodash/uniqueId';
import './ImageBlock.css'

/*
There is huge scope for improving this component.
There are a few variations of the image block in the
design.
- Plain image
- A row of two images
- Image with blurb
- Image with caption
- A row of two images with captions
These variations can be handled my a more intelligent
component that can receive values in its props to render
the different types of images found in the design.

*/
const ImageBlock = ({ images }) => {
  const prefix = 'ImageBlock_';
  const items = images.map((image) => (
    <li className="image" key={uniqueId(prefix)}>
      <img src={image} alt="" />
    </li>
  ));

  return (
    <div className="image-block">
      <ul className="image-block-list">
        {items}
      </ul>
    </div>
  )
}

export default ImageBlock;
