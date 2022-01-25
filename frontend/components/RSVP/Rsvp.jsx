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

  const [rsvpReq, setRsvpReq] = useState({
    user: null,
    saturday: null,
    childrenSaturday: null,
    childrenSaturdayNumber: null,
    sunday: null,
    diet: null,
    otherDiet: null,
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
    } else if (val === "other") {
      setRsvpReq({ ...rsvpReq, diet: "other" });
    } else if (isNaN(Number(val))) {
      setRsvpReq({ ...rsvpReq, otherDiet: val });
    };
  };

  const SaturdayChildren = () => {
    return (
      <div className="question">
        <h2>Are you bringing any children?</h2>
        <div className="inputs">
          <div className="check">
            <label><input type="radio" name="sat-children" id='yes' onClick={() => updateRsvp("sat-children-yes")} />Yes</label>
            <label><input type="radio" name="sat-children" id='no' onClick={() => updateRsvp("sat-children-no")} />No</label>
            <label><input type="radio" name="sat-children" id='maybe' onClick={() => updateRsvp("sat-children-maybe")} />Maybe</label>
          </div>
        </div>
      </div>
    );
  };

  const SaturdayChildrenNumber = () => {
    return (
      <div className="question">
        <h2>How many?</h2>
        <div className="inputs">
          <input id="children-number" type="text" onChange={e => updateRsvp(e.target.value)} />
        </div>
      </div>
    );
  };

  return (
    <div id="rsvp-wrapper">
      <div id="rsvp-container">
        <div id="rsvp-photos">
          <img src="https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/IMG_20200920_183756.jpeg?alt=media&token=2ea8a703-c0a3-4b7e-b550-ddbc19d98ef8" alt="" />
          <img src="https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/IMG_20200920_183756.jpeg?alt=media&token=2ea8a703-c0a3-4b7e-b550-ddbc19d98ef8" alt="" />
          <img src="https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/IMG_20200920_183756.jpeg?alt=media&token=2ea8a703-c0a3-4b7e-b550-ddbc19d98ef8" alt="" />
        </div>

        <div className="question">
          <h2>Are you joining us on Saturday, 23 of July?</h2>
          <div className="inputs">
            <div className="check">
              <label><input type="radio" name="sat" id='yes' onClick={() => updateRsvp("sat-yes")}/>Yes</label>
              <label><input type="radio" name="sat" id='no' onClick={() => updateRsvp("sat-no")}/>No</label>
              <label><input type="radio" name="sat" id='maybe' onClick={() => updateRsvp("sat-maybe")}/>Maybe</label>
            </div>
          </div>
        </div>

        {(rsvpReq.saturday === 'yes' || rsvpReq.saturday === 'maybe') && SaturdayChildren()}
        {(rsvpReq.childrenSaturday === 'yes' || rsvpReq.childrenSaturday === 'maybe') && SaturdayChildrenNumber()}

        <div className="question">
          <h2>Are you joining us on Sunday, 24 of July?</h2>
          <h3>(+18 years only)</h3>
          <div className="inputs">
            <div className="check">
              <label><input type="radio" name="sun" id='yes' onClick={() => updateRsvp("sun-yes")} />Yes</label>
              <label><input type="radio" name="sun" id='no' onClick={() => updateRsvp("sun-no")} />No</label>
              <label><input type="radio" name="sun" id='maybe' onClick={() => updateRsvp("sun-maybe")} />Maybe</label>
            </div>
          </div>
        </div>
        <div className="question">
          <button className="rsvp-submit-btn" onClick={() => sendRsvp(rsvpReq)}><i className="far fa-envelope"></i> Send RSVP</button>
        </div>
      </div>
    </div>
  )
};