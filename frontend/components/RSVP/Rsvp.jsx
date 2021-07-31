import React, { useEffect, useState } from 'react';
import RSVPModal from './RsvpModal';

export default function RSVPContainer({ currentUser, sendRSVP }) {

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.title = `RSVP | #mimirgettingmarried`;
  });

  return (
    <div className="rsvp-container">
      <button className="rsvp-btn" type="submit" onClick={() => {setOpenModal(true)}}>
        <i class="far fa-envelope"></i> RSVP
      </button>
      {openModal && <RSVPModal currentUser={currentUser} sendRSVP={sendRSVP} closeModal={setOpenModal}/>}
    </div>
  )
};