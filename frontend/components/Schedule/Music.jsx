import React from 'react'

function Music() {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="schedule-modal">
        <h2>Music</h2>
        <h3>
          We will have live music played in the reception area followed by a DJ in the Glassroom.
        </h3>
      </div>
    </div>
  );
}

export default Music