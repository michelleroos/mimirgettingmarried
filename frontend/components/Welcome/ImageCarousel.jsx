import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useFirestore from '../../hooks/useFirestore';

export default function ImageCarousel() {

  const { docs } = useFirestore('am-photos');
  const [currentImg, setCurrentImg] = useState(0);
  const length = docs.length || null;
  const [open, setOpen] = useState(false);

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
  }

  const nextImg = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
  }

  if (!docs) {
    return null;
  } else {
    return (
      <div id="welcome-container">
        <div id="disclosure-modal-container">
          {/* <div id="modal-bg" onClick={() => setOpen(false)}>
          </div> */}
          {/* 
          <div id="disclosure-modal">
            <img src={img} />
          </div> */}
          <div id="img-carousel">
            <i className="fas fa-caret-left" onClick={nextImg}></i>
            <i className="fas fa-caret-right" onClick={prevImg}></i>
            {docs.map((img, idx) => {
              return (
                <div className={idx === currentImg ? "img-container active" : "img-container"} key={idx}>
                  {idx === currentImg && (
                    <img src={img.url} alt={img.id} className="carousel-img" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}