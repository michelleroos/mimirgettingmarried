import React, { useEffect, useState } from 'react';
import UploadForm from '../UploadForm/UploadForm';
import AMImageGrid from './AMImageGrid';
import { Link } from 'react-router-dom';
import useFirestore from '../../hooks/useFirestore';

export default function Welcome({ currentUser, pathname }) {

  useEffect(() => {
    document.title = `Welcome | #mimirgettingmarried`;
  });

  const { docs } = useFirestore('am-photos');

  if (currentUser) {
    return (
      <div id="welcome-container">
        {/* <UploadForm pathname={pathname} /> */}
        <div className="img-grid">
          {docs && docs.map(doc => (
            <div className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}>
              <img src={doc.url} alt="uploaded pic" style={{ width: '100%' }} />
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div id="welcome-container">
        <div id="img-container">
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