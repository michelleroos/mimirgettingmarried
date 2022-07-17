import React from 'react'

export default function Sunday({ close }) {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="schedule-modal" id="sunday-modal">
        <h2>Sunday</h2>
        <h3>
          We will host a party on Sunday with a Berlin based surprise DJ,
          starting at 7pm, at{" "}
          <a href="https://balconybar.cz/" target="_blank">
            The Balcony Bar
          </a>
          . Please arrive no later than 8pm. There will be some food available
          to order at the bar but you might want to eat before.
        </h3>
        <h3>Optional dress code: Studio 54 :)</h3>
        <h3>
          Click{" "}
          <a
            href="https://www.google.com/maps/place/Balcony+Bar+Prague/@50.0832111,14.4209752,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94edb313ab49:0x5b8bfaf20ad88e27!8m2!3d50.0832111!4d14.4231639"
            target="_blank"
          >
            here
          </a>{" "}
          for The Balcony Bar on Google Maps.
        </h3>
      </div>
    </div>
  );
}
