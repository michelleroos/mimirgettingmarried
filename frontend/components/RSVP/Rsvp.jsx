import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RsvpModal from './RsvpModal';
import UpdateRsvpModal from './UpdateRsvpModal';

export default function RSVP() {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.session.id);
  const [googleSheetsData, setGoogleSheetsData] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [rsvpModal, setRsvpModal] = useState(false);
  const [updateRsvpModal, setUpdateRsvpModal] = useState(false);

  const [rsvpReq, setRsvpReq] = useState({
    user: null,
    saturday: null,
    diet: null,
    otherDiet: null,
    childrenSaturday: null,
    childrenSaturdayNumber: null,
    sunday: null,
  });

  useEffect(() => {
    document.title = `RSVP | #mimirgettingmarried`;

    dispatch(getUser(currentUserId))
      .then((res) => updateUser(res))

    fetch(`http://localhost:3001/api/rsvp`)
      .then((res) => res.json())
      .then((data) => setGoogleSheetsData(data))
      // .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }, []);

  const updateUser = (res) => {
    setRsvpReq({ ...rsvpReq, user: res.currentUser.user.email });
    setUserEmail(res.currentUser.user.email);
  };

  const filteredData = () => {
    if (googleSheetsData) {
      const filtered = [];
      for (let row of googleSheetsData) {
        if (row[0] === userEmail) {
          filtered.push(row);
          return filtered[0];
        };
      };
    };
    return null;
  };

  const changeRsvp = (req) => {
    const reqOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req)
    };
    // fetch(`http://localhost:3001/api/rsvp/${req.user}`, reqOptions)
    fetch(`https://mimirgettingmarried.herokuapp.com/#/rsvp/${req.user}`, reqOptions)
      .then(res => console.log('updated!'))
  };

  const sendRsvp = (req) => {
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req)
    };
    // fetch("http://localhost:3001/api/rsvp", reqOptions)
    fetch("https://mimirgettingmarried.herokuapp.com/#/rsvp", reqOptions)
      .then(() => setRsvpModal(false))
    window.location.reload(false);
  };

  const updateRsvpReq = (val) => {
    if (val === "sat-yes") {
      setRsvpReq({ ...rsvpReq, saturday: "yes" });
    } else if (val === "sat-no") {
      setRsvpReq({ ...rsvpReq, saturday: "no", diet: null, childrenSaturday: null });
    } else if (val === "sat-maybe") {
      setRsvpReq({ ...rsvpReq, saturday: "maybe" });
    } else if (val === "sat-children-yes") {
      setRsvpReq({ ...rsvpReq, childrenSaturday: "yes" });
    } else if (val === "sat-children-no") {
      setRsvpReq({ ...rsvpReq, childrenSaturday: "no" });
    } else if (val === "sat-children-maybe") {
      setRsvpReq({ ...rsvpReq, childrenSaturday: "maybe" });
    } else if (!isNaN(val)) {
      setRsvpReq({ ...rsvpReq, childrenSaturdayNumber: val });
    } else if (val === "sun-yes") {
      setRsvpReq({ ...rsvpReq, sunday: "yes" });
    } else if (val === "sun-no") {
      setRsvpReq({ ...rsvpReq, sunday: "no" });
    } else if (val === "sun-maybe") {
      setRsvpReq({ ...rsvpReq, sunday: "maybe" });
    } else if (val === "vegan") {
      setRsvpReq({ ...rsvpReq, diet: "vegan" });
    } else if (val === "vegetarian") {
      setRsvpReq({ ...rsvpReq, diet: "vegetarian" });
    } else if (val === "chicken") {
      setRsvpReq({ ...rsvpReq, diet: "chicken" });
    } else if (val === "fish") {
      setRsvpReq({ ...rsvpReq, diet: "fish" });
    } else if (val === "none") {
      setRsvpReq({ ...rsvpReq, diet: "none" });
    } else if (val === "other") {
      setRsvpReq({ ...rsvpReq, diet: "other" });
    } else if (isNaN(Number(val))) {
      setRsvpReq({ ...rsvpReq, otherDiet: val });
    };
  };

  const closeModal = (e) => {
    if (e.target.classList.contains('modal-bg')) {
      setRsvpModal(false);
      setUpdateRsvpModal(false);
      setModalOpen(false)
      setRsvpReq({
        ...rsvpReq, saturday: null,
        diet: null,
        otherDiet: null,
        childrenSaturday: null,
        childrenSaturdayNumber: null,
        sunday: null,
      });
    }
  };

  const openInvitation = () => {
    setModalOpen(true);
    setRsvpModal(true);
    setUpdateRsvpModal(false);
  }

  const openUpdateInvitation = () => {
    setModalOpen(true);
    setUpdateRsvpModal(true);
    setRsvpModal(false);
  }

  const Modal = () => {
    return (
      <div className="modal-bg" onClick={closeModal}>

        {rsvpModal && <RsvpModal setRsvpModal={setRsvpModal} updateRsvpReq={updateRsvpReq} rsvpReq={rsvpReq} sendRsvp={sendRsvp} setRsvpReq={setRsvpReq} />}

        {updateRsvpModal && <UpdateRsvpModal setUpdateRsvpModal={setUpdateRsvpModal} updateRsvpReq={updateRsvpReq} rsvpReq={rsvpReq} changeRsvp={changeRsvp} setRsvpReq={setRsvpReq} />}

      </div>
    )
  }

  const Invitation = () => {
    return (
      <div id="rsvp-note">
        <h2>Dear family & friends - </h2>
        <h3>We're delighted to invite you to our wedding.</h3>
        <h3>When? July 23. Where? Prague.</h3>
        <h3>Please RSVP by June 23rd.</h3>
        <div id="rsvp-btn-wrap">
          <button className="rsvp-submit-btn" onClick={openInvitation}>
            <p>RSVP</p>
            <i className="far fa-envelope"></i>
          </button>
        </div>
      </div>
    );
  };

  const UpdateInvitation = () => {
    return (
      <div id="rsvp-update">
        <h2>Thank you for sending your RSVP -</h2>
        <h3>Change of plans? Please update your reply.</h3>
        <div id="rsvp-btn-wrap">
          <button className="rsvp-submit-btn" onClick={openUpdateInvitation}>
            <p>RSVP</p>
            <i className="far fa-envelope"></i>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div id="rsvp-container">

      {modalOpen ? Modal() : null}

      <div id="rsvp-bg">
        {filteredData() ? UpdateInvitation() : Invitation()}
      </div>

    </div>
  )
};