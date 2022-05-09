import React from 'react'

export default function Sunday({ close }) {
  return (
    <div className="modal-bg" onClick={close}>
      <div className="schedule-modal" id="sunday-modal">
        <h2>Sunday</h2>
        <h3>On Sunday late afternoon we will be hosting a party with a Berlin based surprise DJ on Sunday. Location to be announced.</h3>
      </div>
    </div>
  )
}
