import React from 'react'

export default function Mingle({ close }) {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="modal">
        <p>Meet the other guests and enjoy some drinks and canapées at <a href="http://www.villarichter.cz/lang/en/" target="_blank">Villa Richter</a>'s fountain before the ceremony.</p>
        <p>Vibe and dress code is festive. Photopraphy by <a href="http://www.exclusiveweddingsinprague.com/" target="_blank">Exclusive Weddings in Prague</a>.</p>
        <p>The ceremony will be outdoor, weather permitting, and the reception under the marquee as pictured. The late evening music will be moved from the marquee to the greenhouse.</p>
        <p>Click <a href="https://www.google.com/maps/place/Villa+Richter/@50.0925169,14.406056,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94e0852c61fb:0x4bb05a616b525517!8m2!3d50.0925169!4d14.4082447" target="_blank">here</a> for Villa Richter on Google Maps.</p>
      </div>
    </div>
  )
}
