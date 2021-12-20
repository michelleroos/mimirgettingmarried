import React from 'react'

export default function Sunday({ close }) {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="modal">
        <p>On Sunday afternoon we will be hosting a party with a Berlin based surprise DJ on Sunday at <a href="https://www.glassbar.cz/">Glass Bar</a>.</p>
        <p>Click <a href="https://www.google.com/maps/place/Glass+Bar/@50.075451,14.4120057,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94f6c339f665:0x89f8681b400807c9!8m2!3d50.0755656!4d14.4141744" target="_blank">here</a> for Glass Bar on Google Maps.</p>
      </div>
    </div>
  )
}
