import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useFirestore from '../../hooks/useFirestore';

export default function ImageCarousel({ open, setOpen, index }) {

  const { docs } = useFirestore('am-photos');
  const [currentImg, setCurrentImg] = useState(index);
  const length = docs.length || null;

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
      <div id="disclosure-modal-container">
        <div id="modal-bg" onClick={() => setOpen(false)}>
        </div>
        <div id="img-carousel">
          <i className="fas fa-caret-left" onClick={nextImg}></i>
          <i className="fas fa-caret-right" onClick={prevImg}></i>
          {docs.map((img, idx) => {
            if (idx === currentImg) {
              return (
                <img src={img.url} alt={img.id} key={idx} className={idx === currentImg ? "img-container active" : "img-container"} />
              )
            }
          })}
        </div>
      </div>
    )
  }
}