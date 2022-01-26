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

  const closeModal = (e) => {
    if (e.target.id === 'rsvp-modal-bg') setModal(false);
  };

  const Diet = () => {
    return (
      <div className="question">
        <p>Do you have any dietary restrictions or preferences?</p>
        <div className="inputs">
          <div className="check">
            <label className="radio" onClick={() => updateRsvp("vegan")}>
              <input type="radio" name="diet" id='vegan' className="radio-input" />
              <div className="radio-div"></div> Vegan
            </label>
            <label className="radio" onClick={() => updateRsvp("vegetarian")}>
              <input type="radio" name="diet" id='vegetarian' className="radio-input" />
              <div className="radio-div"></div> Vegetarian
            </label>
            <label className="radio" onClick={() => updateRsvp("fish")}>
              <input type="radio" name="diet" id='fish' className="radio-input" />
              <div className="radio-div"></div> Fish
            </label>
            <label className="radio" onClick={() => updateRsvp("chicken")}>
              <input type="radio" name="diet" id='chicken' className="radio-input" />
              <div className="radio-div"></div> Chicken
            </label>
            <label className="radio" onClick={() => updateRsvp("none")}>
              <input type="radio" name="diet" id='none' className="radio-input" />
              <div className="radio-div"></div> None
            </label>
            <label className="radio" onClick={() => updateRsvp("other")}>
              <input type="radio" name="diet" id='other' className="radio-input" />
              <div className="radio-div"></div> Other
            </label>
          </div>
        </div>
      </div>
    );
  };

  const OtherDiet = () => {
    return (
      <div className="question">
        <p>Please specify</p>
        <div className="inputs">
          <div className="check">
            <input id="other-diet" type="text" onChange={e => updateRsvp(e.target.value)} />
          </div>
        </div>
      </div>
    );
  };

  const SaturdayChildren = () => {
    return (
      <div className="question">
        <p>Will you bring any children?</p>
        <div className="inputs">
          <div className="check">
            <label className="radio" onClick={() => updateRsvp("sat-children-yes")}>
              <input type="radio" name="sat-children" id='yes' className="radio-input" />
              <div className="radio-div"></div> Yes
            </label>
            <label className="radio" onClick={() => updateRsvp("sat-children-no")}>
              <input type="radio" name="sat-children" id='no' className="radio-input" />
              <div className="radio-div"></div> No
            </label>
            <label className="radio" onClick={() => updateRsvp("sat-children-maybe")}>
              <input type="radio" name="sat-children" id='maybe' className="radio-input" />
              <div className="radio-div"></div> Maybe
            </label>
          </div>
        </div>
      </div>
    );
  };

  const HowManyChildren = () => {
    return (
      <div className="question">
        <p>How many?</p>
        <div className="inputs">
          <input id="children-number" type="text" onChange={e => updateRsvp(e.target.value)} />
        </div>
      </div>
    );
  };

  const Modal = () => {
    return (
      <div id="rsvp-modal-bg" onClick={closeModal}>
        <div id="rsvp-modal">
          <div className="question">
            <p>Will you attend our wedding on the 23rd of July?</p>
            <div className="inputs">
              <div className="check">
                <label className="radio" onClick={() => updateRsvp("sat-yes")}>
                  <input type="radio" name="sat" id='yes' className="radio-input" />
                  <div className="radio-div"></div> Yes
                </label>
                <label className="radio" onClick={() => updateRsvp("sat-no")}>
                  <input type="radio" name="sat" id='no' className="radio-input" />
                  <div className="radio-div"></div> No
                </label>
                <label className="radio" onClick={() => updateRsvp("sat-maybe")}>
                  <input type="radio" name="sat" id='maybe' className="radio-input" />
                  <div className="radio-div"></div> Maybe
                </label>
              </div>
            </div>
          </div>

          {(rsvpReq.saturday === 'yes' || rsvpReq.saturday === 'maybe') && Diet()}
          {((rsvpReq.diet === 'other') && (rsvpReq.saturday === 'yes' || rsvpReq.saturday === 'maybe')) && OtherDiet()}
          {(rsvpReq.saturday === 'yes' || rsvpReq.saturday === 'maybe') && SaturdayChildren()}
          {((rsvpReq.childrenSaturday === 'yes' || rsvpReq.childrenSaturday === 'maybe') && (rsvpReq.saturday === 'yes' || rsvpReq.saturday === 'maybe')) && HowManyChildren()}

          <div className="question">
            <p>Will you join our party on Sunday the 24th of July? (+18 years only)</p>
            <div className="inputs">
              <div className="check">
                <label className="radio" onClick={() => updateRsvp("sun-yes")}>
                  <input type="radio" name="sun" id='yes' className="radio-input" />
                  <div className="radio-div"></div> Yes
                </label>
                <label className="radio" onClick={() => updateRsvp("sun-no")}>
                  <input type="radio" name="sun" id='no' className="radio-input" />
                  <div className="radio-div"></div> No
                </label>
                <label className="radio" onClick={() => updateRsvp("sun-maybe")}>
                  <input type="radio" name="sun" id='maybe' className="radio-input" />
                  <div className="radio-div"></div> Maybe
                </label>
              </div>
            </div>
          </div>
          <button id="rsvp-submit-btn" onClick={() => sendRsvp(rsvpReq)}>
            <i className="far fa-envelope"></i>
            <p>Send RSVP</p>
          </button>
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
              <button id="rsvp-submit-btn" onClick={() => setModal(true)}>
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