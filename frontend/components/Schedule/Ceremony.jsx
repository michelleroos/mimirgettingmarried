import React from 'react'

export default function Ceremony({ close }) {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="modal">
        <p>Villa Richter is a classicist summerhouse from 1836 that is a part of the St Wenceslas Vineyard complex at Prague Castle. The complex offers a unique and undisturbed view of the panoramas of Old town, Lesser Town and the Villa Belvedere.</p>
        <p>Click <a href="https://www.google.com/maps/place/Villa+Richter/@50.0925169,14.406056,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94e0852c61fb:0x4bb05a616b525517!8m2!3d50.0925169!4d14.4082447" target="_blank">here</a> for Villa Richter on Google Maps.</p>
      </div>
    </div>
  )
}
