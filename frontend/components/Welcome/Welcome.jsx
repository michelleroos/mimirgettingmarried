import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useFirestore from '../../hooks/useFirestore';
import Image from './_Image';
import UploadForm from '../UploadForm/UploadForm';
import ImageCarousel from './ImageCarousel';

// export default function Welcome({ currentUser, pathname }) {
export default function Welcome() {

  useEffect(() => {
    document.title = `Welcome | #mimirgettingmarried`;
  });

  const currentUserId = useSelector((state) => state.session.id);
  const { docs } = useFirestore('am-photos');
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState('');
  const [index, setIndex] = useState(0);

  const openCarousel = (idx) => {
    setOpen(true);
    setIndex(idx)
  }

  // const openModal = (imgUrl) => {
  //   setOpen(true);
  //   setImg(imgUrl);
  // }

  if (currentUserId) {
    return (
          // <ImageCarousel open={open} setOpen={setOpen} img={img}/>

      <div id="welcome-container">
        {/* <UploadForm pathname={pathname} /> */}
        <div id="logged-in-img-grid">
          {docs && docs.map((doc, idx) => (
            <div className="img-wrap" key={idx} onClick={() => openCarousel(idx)}>
              <img src={doc.url} alt="uploaded pic" style={{ width: '100%' }}/>
            </div>
          ))}
        </div>
        {open ? <ImageCarousel open={open} setOpen={setOpen} index={index} /> : null}
        {/* <Image open={open} setOpen={setOpen} img={img}/> */}
      </div>
    )
  } else {
    return (
      <div id="welcome-container">
        <div id="logged-out-img-container">
          <Link to="/login">
            <button id="log-in-btn" type="submit">
              <p>Log in</p>
              <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    )
  }
};