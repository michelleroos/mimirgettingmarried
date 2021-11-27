import React from 'react';

export default function Image({ open, setOpen, img }) {
  if (!open) {
    return null;
  } else {
    return (
      <div id="disclosure-modal-container">
        <div id="modal-bg" onClick={() => setOpen(false)}>
        </div>

        <div id="disclosure-modal">
          <img src={img} />
        </div>
      </div>
    )
  }
}
