import React, { useEffect, useState } from 'react';
import UploadForm from '../UploadForm/UploadForm';
// import Map from './Map';
import useFirestore from '../../hooks/useFirestore';

export default function Location() {

  useEffect(() => {
    document.title = `Location | #mimirgettingmarried`;
  });

  const friOne = "https://img2.10bestmedia.com/Images/Photos/360642/gettyimages-810290686_54_990x660.jpg"
  const satOne = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/SabrinaJan-057-2-1400x1050.jpeg?alt=media&token=4e03503e-5c38-4e60-915a-6051e609e94e";
  const satTwo = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/7U1A1615.jpeg?alt=media&token=7968cc25-a27d-4cd7-8b40-6416d94099ac";
  const satThree = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/dekor-villa-richter-18-1400x933.jpeg?alt=media&token=56cc93b2-91a4-4ccf-a748-7283aaa4f7a2";
  const satFour = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/039-1.jpeg?alt=media&token=7ef049c5-3bbb-4b7e-95d7-3fc062bc6896";
  const sunOne = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/peg3772.jpeg?alt=media&token=c204e58b-6ce0-4f34-97f3-92220aa54371";
  const sunTwo = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/A901-10-Things-you-did-not-know-about-Dancing-House-Rooftop-Image-1-1024x682.jpeg?alt=media&token=672f40fe-da52-467e-88fb-d410c4074ba1";
  const sunThree = "https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/tancici-dum-3.jpeg?alt=media&token=887da6d7-65e5-42da-a02d-856d12ddda5c";

  return (
    <div className="location-container">
      <div id="fri-img" className="location-imgs">
        <img src={friOne} alt="" />
      </div>
      <div id="fri-header" className="location-headers location-text">
        <h1>FRIDAY</h1>
      </div>
      <div id="fri-text" className="location-text">
        <p>Friday evening's activity and location is TBD but most likely we will meet in a Czech pub. Vibe and dress code - casual.</p>
      </div>
      <div id="sat-header" className="location-headers location-text">
        <h1>SATURDAY</h1>
      </div>
      <div id="sat-img-1" className="location-imgs">
        <img src={satOne} alt="" />
      </div>
      <div id="sat-img-2" className="location-imgs">
        <img src={satTwo} alt="" />
      </div>
      <div id="sat-img-3" className="location-imgs">
        <img src={satThree} alt="" />
      </div>
      <div id="sat-text-1" className="location-text">
        <p>The ceremony and reception will take place on Saturday afternoon and evening at <a href="http://www.villarichter.cz/lang/en/" target="_blank">Villa Richter</a>. Villa Richter is a classicist summerhouse from 1836 that is a part of the St Wenceslas Vineyard complex at Prague Castle. The complex offers a unique and undisturbed view of the panoramas of Old town, Lesser Town and the Villa Belvedere.</p>
        <p>Click <a href="https://www.google.com/maps/place/Villa+Richter/@50.0925169,14.406056,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94e0852c61fb:0x4bb05a616b525517!8m2!3d50.0925169!4d14.4082447" target="_blank">here</a> for Villa Richter on Google Maps.</p>
      </div>
      <div id="sat-text-2" className="location-text">
        <p>The Villa features restaurant Piano Nobile which has a sunny terrace overlooking the vineyard. The  menu at Piano Nobile is inspired by Czech and European cousine and uses seasonal and local ingredients.</p>
      </div>
      <div id="sat-img-4" className="location-imgs">
        <img src={satFour} alt="" />
      </div>
      <div id="sat-text-3" className="location-text">
        <p>The ceremony will be outdoor, weather permitting, and the reception under the marquee as pictured. The late evening music will be moved from the marquee to the greenhouse.</p>
        <p>Vibe and dress code is festive. Photopraphy by <a href="http://www.exclusiveweddingsinprague.com/" target="_blank">Exclusive Weddings in Prague</a>.</p>
      </div>
      <div id="sun-header" className="location-headers location-text">
        <h1>SUNDAY</h1>
      </div>
      <div id="sun-img-1" className="location-imgs">
        <img src={sunOne} alt="" />
      </div>
      <div id="sun-text-1" className="location-text">
        <p>On Sunday afternoon we will be hosting a party with a Berlin based surprise DJ on Sunday at <a href="https://www.glassbar.cz/">Glass Bar</a>.</p>
        <p>Click <a href="https://www.google.com/maps/place/Glass+Bar/@50.075451,14.4120057,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94f6c339f665:0x89f8681b400807c9!8m2!3d50.0755656!4d14.4141744" target="_blank">here</a> for Glass Bar on Google Maps.</p>
      </div>
      <div id="sun-img-2" className="location-imgs">
        <img src={sunTwo} alt="" />
      </div>
      <div id="sun-text-2" className="location-text">
        
        <p>Part indoor lounge with panoramic windows and part open-air rooftop terrace and located on top of  famous and spectacular Dancing House building, the Glass Bar is a relaxing café-style rooftop bar, offering grand views over the Prague Castle, the National Theatre and the river.</p>
      </div>
      <div id="sun-img-3" className="location-imgs">
        <img src={sunThree} alt="" />
      </div>

    </div>
  )

};