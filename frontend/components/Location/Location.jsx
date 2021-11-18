import React, { useEffect, useState } from 'react';
import UploadForm from '../UploadForm/UploadForm';
import Map from './Map';
import useFirestore from '../../hooks/useFirestore';

export default function Location() {

  useEffect(() => {
    document.title = `Location | #mimirgettingmarried`;
  });

  const satOne = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/7U1A1615.jpeg?alt=media&token=7968cc25-a27d-4cd7-8b40-6416d94099ac";
  const satTwo = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/dekor-villa-richter-18-1400x933.jpeg?alt=media&token=56cc93b2-91a4-4ccf-a748-7283aaa4f7a2";
  const satThree = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/SabrinaJan-057-2-1400x1050.jpeg?alt=media&token=4e03503e-5c38-4e60-915a-6051e609e94e";
  const satFour = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/039-1.jpeg?alt=media&token=7ef049c5-3bbb-4b7e-95d7-3fc062bc6896";
  const sunOne = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/tancici-dum-3.jpeg?alt=media&token=887da6d7-65e5-42da-a02d-856d12ddda5c";
  const sunTwo = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/peg3772.jpeg?alt=media&token=c204e58b-6ce0-4f34-97f3-92220aa54371";
  const sunThree = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/A901-10-Things-you-did-not-know-about-Dancing-House-Rooftop-Image-1-1024x682.jpeg?alt=media&token=672f40fe-da52-467e-88fb-d410c4074ba1";

  const { docs } = useFirestore('location');
  // const sunday = useFirestore('sunday');

  return (
    <div className="location-container">
      {/* <UploadForm /> */}
      <h1>Friday</h1>
      <div className="location-text">
        <p>Friday evening activity TBD but most likely mingle in a Czech pub. Vibe and dress code - casual.</p>

      </div>
      <h1>Saturday</h1>
      {/* <Map /> */}
      <div className="img-grid">
        {docs && docs.map(doc => {
          if (doc.url === satOne || doc.url === satTwo || doc.url === satThree || doc.url === satFour) {
            return (
              <div className="img-wrap"
                key={doc.id}
                onClick={() => setSelectedImg(doc.url)}>
                <img src={doc.url} alt={doc.id} style={{ width: '100%' }} />
              </div>
            )
          }
        })}
      </div>
      <div className="location-text">
        <p>The ceremony and reception will take place at Villa Richter (a classicist summerhouse from 1836) which is a part of the St Wenceslas Vineyard complex at Prague Castle. The complex offers its visitors a unique and undisturbed view of the panoramas of Old town, Lesser Town or the villa Belvedere.</p>
        <p>The Villa features restaurant Piano Nobile which has a sunny terrace overlooking the vineyard. The  menu at Piano Nobile is inspired by Czech and European cousine and uses seasonal and local ingredients.</p>
        <p>The ceremony will be outdoor, weather permitting, and the reception under the marquee as pictured above. The late evening music will be moved from the marquee to the greenhouse.</p>
        <p>Vibe and dress code is festive. Photopraphy by Exclusive Weddings in Prague.</p>
      </div>
      <h1>Sunday</h1>
      <div className="img-grid">
        {docs && docs.map(doc => {
          if (doc.url === sunOne || doc.url === sunTwo || doc.url === sunThree) {
            return (
              <div className="img-wrap"
                key={doc.id}
                onClick={() => setSelectedImg(doc.url)}>
                <img src={doc.url} alt={doc.id} style={{ width: '100%' }} />
              </div>
            )
          }
        })}
      </div>
      <div className="location-text">
        <p>We will be hosting a party with a Berlin based surprise DJ on Sunday at the Glass Bar.</p>
        <p>Part indoor lounge with panoramic windows and part open-air rooftop terrace and located on top of  famous and spectacular Dancing House building, the Glass Bar is a relaxing café-style rooftop bar, offering grand views over the Prague Castle, the National Theatre and the river.</p>
        <p>The theme for the party is Studio 54.</p>
      </div>
    </div>
  )

};

