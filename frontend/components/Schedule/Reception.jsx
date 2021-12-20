import React from 'react'

export default function Reception({ close }) {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="modal">
        <p>The Villa features restaurant Piano Nobile which has a sunny terrace overlooking the vineyard. The  menu at Piano Nobile is inspired by Czech and European cousine and uses seasonal and local ingredients.</p>
        <p>Click <a href="https://www.google.com/maps/place/Villa+Richter/@50.0925169,14.406056,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94e0852c61fb:0x4bb05a616b525517!8m2!3d50.0925169!4d14.4082447" target="_blank">here</a> for Villa Richter on Google Maps.</p>
      </div>
    </div>
  )
}
