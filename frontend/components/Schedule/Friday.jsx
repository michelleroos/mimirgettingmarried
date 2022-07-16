import React from 'react'

export default function Friday({ close }) {

  return (
    <div className="modal-bg" onClick={close}>
      <div className="schedule-modal" id="friday-modal">
        <h2>Friday</h2>
        <h3>
          We will be at the Rooftop T-Anker for anyone that is around on Friday
          and wants to meet up.
        </h3>
        <img
          src="https://1.bp.blogspot.com/-3_5l3viHVJc/YKPiTYMTe9I/AAAAAAAAFN0/FCezW2Nt5_wBPt5h-hoalGgaLGSN4V9OACLcBGAsYHQ/s1422/Czech1-min.png"
          alt="beer-prague"
          id="friday"
        />
        <h3>Vibe and dress code - casual.</h3>
        <h3>
          Click{" "}
          <a
            href="https://www.google.com/maps/place/T-Anker/@50.0887405,14.425191,17z/data=!4m12!1m6!3m5!1s0x470b94ea50cb6d03:0xdfd37f1c092d47c8!2sT-Anker!8m2!3d50.0887405!4d14.4273797!3m4!1s0x470b94ea50cb6d03:0xdfd37f1c092d47c8!8m2!3d50.0887405!4d14.4273797"
            target="_blank"
          >
            here
          </a>{" "}
          for Rooftop Tanker on Google Maps.
        </h3>
      </div>
    </div>
  );
}
