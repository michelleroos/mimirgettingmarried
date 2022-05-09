import React from 'react'

export default function Ceremony({ close }) {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="schedule-modal" id="saturday-ceremony-modal">
        {/* <h2>Saturday - July 23</h2> */}
        <h2>Ceremony</h2>
        <h3>
          The ceremony will be held in the vineyard overlooking the panoramas of Old town, Lesser Town and the Villa Belvedere.
        </h3>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/SabrinaJan-057-2-1400x1050.jpeg?alt=media&token=4e03503e-5c38-4e60-915a-6051e609e94e"
          alt="saturday-ceremony"
          id="ceremony"
        />
        <p>
          Photopraphy by{" "}
          <a href="http://www.exclusiveweddingsinprague.com/" target="_blank">
            Exclusive Weddings in Prague
          </a>
          .
        </p>
        <h3>
          Click{" "}
          <a
            href="https://www.google.com/maps/place/Villa+Richter/@50.0925169,14.406056,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94e0852c61fb:0x4bb05a616b525517!8m2!3d50.0925169!4d14.4082447"
            target="_blank"
          >
            here
          </a>{" "}
          for Villa Richter on Google Maps.
        </h3>
      </div>
    </div>
  );
}
