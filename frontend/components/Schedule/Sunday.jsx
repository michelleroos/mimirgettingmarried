import React from 'react'

export default function Sunday({ close }) {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="schedule-modal">
        <h2>Sunday - July 24</h2>
        <h2>Party at GLASS Bar</h2>
        <h3>On Sunday afternoon we will be hosting a party with a Berlin based surprise DJ on Sunday at <a href="https://www.glassbar.cz/">Glass Bar</a>.</h3>
        <div className="schedule-img-container">
          <img src="https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/peg3772.jpeg?alt=media&token=c204e58b-6ce0-4f34-97f3-92220aa54371" alt="glass-bar" />
          <img src="https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/tancici-dum-3.jpeg?alt=media&token=887da6d7-65e5-42da-a02d-856d12ddda5c" alt="glass-bar" />
          <img src="https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/A901-10-Things-you-did-not-know-about-Dancing-House-Rooftop-Image-1-1024x682.jpeg?alt=media&token=672f40fe-da52-467e-88fb-d410c4074ba1" alt="glass-bar" />
        </div>
        <h3>Click <a href="https://www.google.com/maps/place/Glass+Bar/@50.075451,14.4120057,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94f6c339f665:0x89f8681b400807c9!8m2!3d50.0755656!4d14.4141744" target="_blank">here</a> for Glass Bar on Google Maps.</h3>
      </div>
    </div>
  )
}
