import React, { useEffect, useState } from 'react';

export default function ImageCarousel({ img, setImg, imgID }) {

  const handleClick = (e) => {
    if (e.target.id === 'modal-bg') setImg(null);
  }

  const carousel = (
    <div id="modal-bg" onClick={handleClick}>
      <img src={img} alt={imgID} />
      {/* <p>Here is a text description</p> */}
    </div>
  )

  return carousel;
}