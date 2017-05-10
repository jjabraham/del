import React from 'react';
import uniqueId from 'lodash/uniqueId';
import './ImageBlock.css'

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
