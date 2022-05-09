import React from 'react'

export default function Reception({ close }) {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="schedule-modal">
        {/* <h2>Saturday - July 23</h2> */}
        <h2>Reception</h2>
        <h3>The reception will be hosted in restaurant Piano Nobile which has a  terrace overlooking the vineyard. The  menu at Piano Nobile is inspired by Czech and European cousine and uses seasonal and local ingredients.</h3>
        <img src="https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/dekor-villa-richter-18-1400x933.jpeg?alt=media&token=56cc93b2-91a4-4ccf-a748-7283aaa4f7a2" alt="saturday-reception" id="reception"/>
        <p>Photopraphy by <a href="http://www.exclusiveweddingsinprague.com/" target="_blank">Exclusive Weddings in Prague</a>.</p>
        <h3>Click <a href="https://www.google.com/maps/place/Villa+Richter/@50.0925169,14.406056,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94e0852c61fb:0x4bb05a616b525517!8m2!3d50.0925169!4d14.4082447" target="_blank">here</a> for Villa Richter on Google Maps.</h3>
      </div>
    </div>
  )
}
