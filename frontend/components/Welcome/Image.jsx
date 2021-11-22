import React from 'react';

export default function Image({ isOpen, setIsOpen, img }) {
  if (!isOpen) {
    return null;
  } else {
    return (
      <div id="disclosure-modal-container">
        <div id="modal-bg" onClick={() => setIsOpen(false)}>
        </div>

        <div id="disclosure-modal">
          <img src={img} />
        </div>
      </div>
    )
  }
}
