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
    document.title = `A & M | #mimirgettingmarried`;
  });

  const currentUserId = useSelector((state) => state.session.id);
  const { docs } = useFirestore('am-photos');
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState(null);
  const [imgID, setImgID] = useState(null);
  // const [img, setImg] = useState('');
  const [index, setIndex] = useState(0);

  const openCarousel = (idx) => {
    setOpen(true);
    setIndex(idx)
  }

  const handleClick = (url, id) => {
    setImg(url);
    setImgID(id);
  };

  const loggedIn = (
    <div id="logged-in-img-grid">
      {docs && docs.map((doc, idx) => (
        <div className="img-wrap" key={idx} onClick={() => handleClick(doc.url, doc.id)}>
          <img src={doc.url} alt={doc.id} />
        </div>
      ))}
    </div>
  )

  const loggedOut = (
    <div id="logged-out-img-container">
      <Link to="/login">
        <button id="log-in-btn" type="submit">
          <p>Log in</p>
          <i className="fas fa-arrow-right"></i>
        </button>
      </Link>
    </div>
  )

  return (
    <div id="welcome-container">
      {currentUserId ? loggedIn : loggedOut}
      {img && <ImageCarousel img={img} setImg={setImg} imgID={imgID} />}
    </div>
  );
};