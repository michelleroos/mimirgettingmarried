// import faqData from '../Faq/data';
// import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function RSVP() {
  const dispatch = useDispatch();

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

  const sendRsvp = (req) => {
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req)
    };
    fetch("http://localhost:3001/api/rsvp", reqOptions)
      .then(res => console.log('sent!'))
  }

  const currentUser = useSelector((state) => state.entities.user.user);
  const currentUserId = useSelector((state) => state.session.id);
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(true);

  const [rsvpReq, setRsvpReq] = useState({
    user: null,
    saturday: null,
    diet: null,
    otherDiet: null,
    childrenSaturday: null,
    childrenSaturdayNumber: null,
    sunday: null,
  });

  const updateRsvp = (val) => {
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

  const Modal = () => {
    return (
      <div id="rsvp-modal-bg">
        <div id="rsvp-modal">
          <div className="question">
            <p>Are you joining us on Saturday, 23 of July?</p>
            <div className="inputs">
              <div className="check">
                <label><input type="radio" name="sat" id='yes' onClick={() => updateRsvp("sat-yes")} />Yes</label>
                <label><input type="radio" name="sat" id='no' onClick={() => updateRsvp("sat-no")} />No</label>
                <label><input type="radio" name="sat" id='maybe' onClick={() => updateRsvp("sat-maybe")} />Maybe</label>
              </div>
            </div>
          </div>

          <div className="question">
            <p>Do you have any dietary restrictions or preferences?</p>
            <div className="inputs">
              <div className="check">
                <label><input type="radio" name="diet" id='vegan' onClick={() => updateRsvp("vegan")} />Vegan</label>
                <label><input type="radio" name="diet" id='vegetarian' onClick={() => updateRsvp("vegetarian")} />Vegetarian</label>
                <label><input type="radio" name="diet" id='chicken' onClick={() => updateRsvp("vegetarian")} />Chicken</label>
                <label><input type="radio" name="diet" id='fish' onClick={() => updateRsvp("vegetarian")} />Fish</label>
                <label><input type="radio" name="diet" id='none' onClick={() => updateRsvp("none")} />None</label>
                <label><input type="radio" name="diet" id='other' onClick={() => updateRsvp("other")} />Other</label>
              </div>
            </div>
          </div>

          <div className="question">
            <p>Please specify</p>
            <div className="inputs">
              <div className="check">
                <input id="other-diet" type="text" onChange={e => updateRsvp(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="question">
            <p>Are you bringing any children?</p>
            <div className="inputs">
              <div className="check">
                <label><input type="radio" name="sat-children" id='yes' onClick={() => updateRsvp("sat-children-yes")} />Yes</label>
                <label><input type="radio" name="sat-children" id='no' onClick={() => updateRsvp("sat-children-no")} />No</label>
                <label><input type="radio" name="sat-children" id='maybe' onClick={() => updateRsvp("sat-children-maybe")} />Maybe</label>
              </div>
            </div>
          </div>

          <div className="question">
            <p>How many?</p>
            <div className="inputs">
              <input id="children-number" type="text" onChange={e => updateRsvp(e.target.value)} />
            </div>
          </div>

          <div className="question">
            <p>Are you joining us on Sunday, 24 of July? (+18 years only)</p>
            <div className="inputs">
              <div className="check">
                <label><input type="radio" name="sun" id='yes' onClick={() => updateRsvp("sun-yes")} />Yes</label>
                <label><input type="radio" name="sun" id='no' onClick={() => updateRsvp("sun-no")} />No</label>
                <label><input type="radio" name="sun" id='maybe' onClick={() => updateRsvp("sun-maybe")} />Maybe</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="rsvp-wrapper">
      {modal && Modal()}
      <div id="rsvp-img-container">
        <div id="rsvp-invitation">
          <div id="envelope"></div>
          <div id="rsvp-note">
            <h2>Dear family & friends - </h2>
            <h3>We're delighted to invite you to our wedding!</h3>
            <h3>Please RSVP by June 23rd.</h3>
            <div id="rsvp-btn-wrap">
              <button id="rsvp-submit-btn">
                <p>RSVP</p>
                <i className="far fa-envelope"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};