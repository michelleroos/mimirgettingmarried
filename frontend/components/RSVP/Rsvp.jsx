import React, { useEffect, useState } from 'react';
import RSVPModal from './RsvpModal';
import { useForm } from 'react-hook-form';
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
      .catch((err) => console.log(err))
  }, []);

  const currentUser = useSelector((state) => state.entities.user.user);
  const currentUserId = useSelector((state) => state.session.id);
  const [data, setData] = useState(null);

  const [rsvpReq, setRsvpReq] = useState({
    user: null,
    friday: null,
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
      console.log(rsvpReq);
    } else if (val === "sat-no") {
      setRsvpReq({ ...rsvpReq, saturday: "no" });
      console.log(rsvpReq);
    } else if (val === "sat-maybe") {
      setRsvpReq({ ...rsvpReq, saturday: "maybe" });
      console.log(rsvpReq);
    } else if (val === "sat-children-yes") {
      setRsvpReq({ ...rsvpReq, childrenSaturday: "yes" });
      console.log(rsvpReq);
    } else if (val === "sat-children-no") {
      setRsvpReq({ ...rsvpReq, childrenSaturday: "no" });
      console.log(rsvpReq);
    } else if (val === "sat-children-maybe") {
      setRsvpReq({ ...rsvpReq, childrenSaturday: "maybe" });
      console.log(rsvpReq);
    } else if (!isNaN(Number(val)) ) {
      setRsvpReq({ ...rsvpReq, childrenSaturdayNumber: Number(val) });
      console.log(rsvpReq);
    } else if (val === "sun-yes") {
      setRsvpReq({ ...rsvpReq, sunday: "yes" });
      console.log(rsvpReq);
    } else if (val === "sun-no") {
      setRsvpReq({ ...rsvpReq, sunday: "no" });
      console.log(rsvpReq);
    } else if (val === "sun-maybe") {
      setRsvpReq({ ...rsvpReq, sunday: "maybe" });
      console.log(rsvpReq);
    } else if (val === "vegan") {
      setRsvpReq({ ...rsvpReq, diet: "vegan" });
      console.log(rsvpReq);
    } else if (val === "vegetarian") {
      setRsvpReq({ ...rsvpReq, diet: "vegetarian" });
      console.log(rsvpReq);
    } else if (val === "other") {
      setRsvpReq({ ...rsvpReq, diet: "other" });
      console.log(rsvpReq);
    } else if (isNaN(Number(val))) {
      setRsvpReq({ ...rsvpReq, otherDiet: val });
    }
  }

  const sendRsvp = (req) => {
    const reqOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(req)
    };
    fetch("http://localhost:3001/api/rsvp", reqOptions)
    .then(res => console.log('sent!'))
  }

  const Saturday = () => {
    return (
      <div className="rsvp-q">
        <h2>Are you joining us on Saturday, 23 of July?</h2>
        <div className="inputs">
          <button className={rsvpReq.saturday === "yes" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-yes")}>Yes</button>
          <button className={rsvpReq.saturday === "no" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-no")}>No</button>
          <button className={rsvpReq.saturday === "maybe" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-maybe")}>Maybe</button>
        </div>
      </div>
    )
  }

  const ChildrenSaturday = () => {
    return (
      <div className="rsvp-q">
        <h2>Are you bringing any children?</h2>
        <div className="inputs">
          <button className={rsvpReq.childrenSaturday === "yes" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-children-yes")}>Yes</button>
          <button className={rsvpReq.childrenSaturday === "no" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-children-no")}>No</button>
          <button className={rsvpReq.childrenSaturday === "maybe" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-children-no")}>Maybe</button>
        </div>
      </div>
    )
  }

  const childrenNumber = () => {
    return (
      <div className="rsvp-q">
        <h2>How many?</h2>
        <div className="inputs">
          <input id="children-number" type="text" onChange={e => updateRsvp(e.target.value)} />
          {/* <input id="children-number" type="text" onChange={() => updateRsvp("5")} /> */}
        </div>
      </div>
    )
  }

  const Sunday = () => {
    return (
      <div className="rsvp-q">
        <h2>Are you joining us on Sunday, 24 of July?</h2>
        <h2>(Sorry - no children allowed)</h2>
        <div className="inputs">
          <button className={rsvpReq.sunday === "yes" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sun-yes")}>Yes</button>
          <button className={rsvpReq.sunday === "no" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sun-no")}>No</button>
          <button className={rsvpReq.sunday === "maybe" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sun-maybe")}>Maybe</button>
        </div>
      </div>
    )
  }

  const Diet = () => {
    return (
      <div className="rsvp-q">
        <h2>Do you have any dietary restrictions?</h2>
        <div className="inputs">
          <button className={rsvpReq.diet === "vegan" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("vegan")}>Vegan</button>
          <button className={rsvpReq.diet === "vegetarian" ? "btn-clicked veggie" : "rsvp-btn veggie"} onClick={() => updateRsvp("vegetarian")}>Vegetarian</button>
          <button className={rsvpReq.diet === "other" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("other")}>Other</button>
        </div>
      </div>
    )
  }

  const SpecifyOtherDiet = () => {
    return (
      <div className="rsvp-q">
        <h2>Please specify</h2>
        <div className="inputs">
          <input id="other-diet" type="text" onChange={e => updateRsvp(e.target.value)}/>
        </div>
      </div>
    )
  }

  const RsvpBtn = () => {
    return (
      <button className="rsvp-submit-btn" onClick={() => sendRsvp(rsvpReq)}><i className="far fa-envelope"></i> Send RSVP</button>
    )
  }

  if (!data) {
    return null;
  } else {
    return (
      <div className="rsvp-container">

        <form className="rsvp-form">
          <div className="rsvp-content">

            {Saturday()}

            {rsvpReq.saturday === "yes" || rsvpReq.saturday === "maybe" ? ChildrenSaturday() : <></>}

            {rsvpReq.childrenSaturday === "yes" || rsvpReq.childrenSaturday === "maybe" ? childrenNumber() : <></>}
            
            {rsvpReq.childrenSaturday === "no" || rsvpReq.childrenSaturdayNumber ? Sunday() : <></>}

            {rsvpReq.sunday === "yes" || rsvpReq.sunday === "no" || rsvpReq.sunday === "maybe" ? Diet() : <></>}

            {rsvpReq.diet === "vegan" || rsvpReq.diet === "vegetarian" || rsvpReq.otherDiet ? RsvpBtn() : <></>}

            {rsvpReq.diet === "other" ? SpecifyOtherDiet() : <></>}

          </div>
        </form>
      </div>
    )
  }
};