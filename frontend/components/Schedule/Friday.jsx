import React from 'react'

export default function Friday({ close }) {

  return (
    <div className="modal-bg" onClick={close}>
      <div className="schedule-modal" id="friday-modal">
        <h2>Friday - July 22</h2>
        <h3>Friday evening's activity and location is TBD but we will likely arrange a meet-up in a Czech pub for anyone that is around.</h3>
        <h3>Vibe and dress code - casual.</h3>
        <img src="https://1.bp.blogspot.com/-3_5l3viHVJc/YKPiTYMTe9I/AAAAAAAAFN0/FCezW2Nt5_wBPt5h-hoalGgaLGSN4V9OACLcBGAsYHQ/s1422/Czech1-min.png" alt="beer-prague" />
      </div>
    </div>
  )
}
