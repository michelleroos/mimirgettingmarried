import React from 'react'

export default function Friday({ close }) {

  return (
    <div className="modal-bg" onClick={close}>
      <div className="modal">
        <p>Friday evening's activity and location is TBD but most likely we will meet in a Czech pub. Vibe and dress code - casual.</p>
      </div>
    </div>
  )
}
