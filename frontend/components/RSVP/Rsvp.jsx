import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RsvpModal from './RsvpModal';
import UpdateRsvpModal from './UpdateRsvpModal';

export default function RSVP() {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.entities.user.user);
  const currentUserId = useSelector((state) => state.session.id);
  const [data, setData] = useState(null);
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
      .then((res) => setRsvpReq({ ...rsvpReq, user: res.currentUser.user.email }))

    fetch("http://localhost:3001/api/rsvp")
      .then((res) => res.json())
      .then((data) => setData(data.values))
      // .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }, []);

  const changeRsvp = (req) => {
    const reqOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req)
    };
    fetch(`http://localhost:3001/api/rsvp/${email}`, reqOptions)
      .then(res => console.log('updated!'))
  };

  const sendRsvp = (req) => {
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req)
    };
    fetch("http://localhost:3001/api/rsvp", reqOptions)
      .then(res => console.log('sent!'))
  };

  const updateRsvpReq = (val) => {
    if (val === "sat-yes") {
      setRsvpReq({ ...rsvpReq, saturday: "yes" });
    } else if (val === "sat-no") {
      setRsvpReq({ ...rsvpReq, saturday: "no" });
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

  const Invitation = () => {
    return (
      <div id="rsvp-note">
        <h2>Dear family & friends - </h2>
        <h3>We're delighted to invite you to our wedding!</h3>
        <h3>Please RSVP by June 23rd.</h3>
        <div id="rsvp-btn-wrap">
          <button id="rsvp-submit-btn" onClick={() => setRsvpModal(true)}>
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
        <button id="rsvp-submit-btn" onClick={() => setUpdateRsvpModal(true)}>
          <p>RSVP</p>
          <i className="far fa-envelope"></i>
        </button>
      </div>
    )
  }

  return (
    <div id="rsvp-wrapper">
      {rsvpModal && <RsvpModal setRsvpModal={setRsvpModal} updateRsvpReq={updateRsvpReq} rsvpReq={rsvpReq} sendRsvp={sendRsvp} />}
      {updateRsvpModal && <UpdateRsvpModal setUpdateRsvpModal={setUpdateRsvpModal} updateRsvpReq={updateRsvpReq} rsvpReq={rsvpReq} changeRsvp={changeRsvp}/>}
      <div id="rsvp-img-container">
        <div id="rsvp-invitation">
          <div id="envelope"></div>
          {data ? UpdateInvitation() : Invitation()}
        </div>
      </div>
    </div>
  )
};