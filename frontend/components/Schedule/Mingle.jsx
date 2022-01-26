import React from 'react'

export default function Mingle({ close }) {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="modal" id="saturday-mingle-modal">
        <h2>Saturday - July 23</h2>
        <h2>Mingle</h2>
        <h3>Meet the other guests and enjoy some drinks and canapées at <a href="http://www.villarichter.cz/lang/en/" target="_blank">Villa Richter</a>'s fountain before the ceremony.</h3>
        <img src="https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/039-1.jpeg?alt=media&token=7ef049c5-3bbb-4b7e-95d7-3fc062bc6896" alt="saturday-mingle" />
        <p>Photopraphy by <a href="http://www.exclusiveweddingsinprague.com/" target="_blank">Exclusive Weddings in Prague</a>.</p>
        <h3>Click <a href="https://www.google.com/maps/place/Villa+Richter/@50.0925169,14.406056,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94e0852c61fb:0x4bb05a616b525517!8m2!3d50.0925169!4d14.4082447" target="_blank">here</a> for Villa Richter on Google Maps.</h3>
      </div>
    </div>
  )
}
