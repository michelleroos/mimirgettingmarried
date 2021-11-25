import React, { useEffect, useState } from 'react';
import RSVPModal from './RsvpModal';
import { useForm } from 'react-hook-form';

export default function RSVP({ currentUser, sendRSVP }) {

  useEffect(() => {
    document.title = `RSVP | #mimirgettingmarried`;
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/rsvp")
      .then((res) => res.json())
      .then((data) => setData(data.values))
      .catch((err) => console.log(err))
  }, []);

  const [rsvpReply, setRsvpReply] = useState({
    // email: currentUser.email,
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
      setRsvpReply({ ...rsvpReply, saturday: "yes" });
    } else if (val === "sat-no") {
      setRsvpReply({ ...rsvpReply, saturday: "no" });
    } else if (val === "sat-maybe") {
      setRsvpReply({ ...rsvpReply, saturday: "maybe" });
    } else if (val === "sat-children-yes") {
      setRsvpReply({ ...rsvpReply, childrenSaturday: "yes" });
    } else if (val === "sat-children-no") {
      setRsvpReply({ ...rsvpReply, childrenSaturday: "no" });
    } else if (val === "sat-children-maybe") {
      setRsvpReply({ ...rsvpReply, childrenSaturday: "maybe" });
    } else if (!isNaN(Number(val)) ) {
      setRsvpReply({ ...rsvpReply, childrenSaturdayNumber: Number(val) });
    } else if (val === "sun-yes") {
      console.log("sun yes here i am");
      setRsvpReply({ ...rsvpReply, sunday: "yes" });
    } else if (val === "sun-no") {
      setRsvpReply({ ...rsvpReply, sunday: "no" });
    } else if (val === "sun-maybe") {
      setRsvpReply({ ...rsvpReply, sunday: "maybe" });
    } else if (val === "vegan") {
      setRsvpReply({ ...rsvpReply, diet: "vegan" });
    } else if (val === "vegetarian") {
      setRsvpReply({ ...rsvpReply, diet: "vegetarian" });
    } else if (val === "other") {
      setRsvpReply({ ...rsvpReply, diet: "other" });
    }
  }

  // const [clickSaturday, setClickSaturday] = useState({
  //   yes: false,
  //   no: false,
  //   maybe: false
  // });

  // const yesSaturday = () => {
  //   setClickSaturday(prevState => ({...prevState, yes: true, no: false, maybe: false}));
  // }

  const saturday = () => {
    return (
      <div className="rsvp-q">
        <h2>Are you joining us on Saturday, 23 of July?</h2>
        <div className="inputs">
          <button className={rsvpReply.saturday === "yes" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-yes")}>Yes</button>
          <button className={rsvpReply.saturday === "no" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-no")}>No</button>
          <button className={rsvpReply.saturday === "maybe" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-maybe")}>Maybe</button>
        </div>
      </div>
    )
  }

  const childrenSaturday = () => {
    return (
      <div className="rsvp-q">
        <h2>Are you bringing any children?</h2>
        <div className="inputs">
          <button className={rsvpReply.childrenSaturday === "yes" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-children-yes")}>Yes</button>
          <button className={rsvpReply.childrenSaturday === "no" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-children-no")}>No</button>
          <button className={rsvpReply.childrenSaturday === "maybe" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-children-no")}>Maybe</button>
        </div>
      </div>
    )
  }

  const childrenNumber = () => {
    return (
      <div className="rsvp-q">
        <h2>How many?</h2>
        <div className="inputs">
          {/* <input id="children-number" type="text" onChange={e => updateRsvp(e.target.value)} /> */}
          <input id="children-number" type="text" onChange={() => updateRsvp("5")} />
        </div>
      </div>
    )
  }

  const sunday = () => {
    return (
      <div className="rsvp-q">
        <h2>Are you joining us on Sunday, 24 of July?</h2>
        <h2>(Sorry - no children allowed)</h2>
        <div className="inputs">
          <button className={rsvpReply.sunday === "yes" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sun-yes")}>Yes</button>
          <button className={rsvpReply.sunday === "no" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sun-no")}>No</button>
          <button className={rsvpReply.sunday === "maybe" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sun-maybe")}>Maybe</button>
        </div>
      </div>
    )
  }

  const diet = () => {
    return (
      <div className="rsvp-q">
        <h2>Do you have any dietary restrictions?</h2>
        <div className="inputs">
          <button className={rsvpReply.diet === "vegan" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("vegan")}>Vegan</button>
          <button className={rsvpReply.diet === "vegetarian" ? "btn-clicked veggie" : "rsvp-btn veggie"} onClick={() => updateRsvp("vegetarian")}>Vegetarian</button>
          <button className={rsvpReply.diet === "other" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("other")}>Other</button>
        </div>
      </div>
    )
  }

  const SpecifyOtherDiet = () => {
    return (
      <div className="rsvp-q">
        <h2>Please specify</h2>
        <div className="inputs">
          <input id="other-diet" type="text" />
        </div>
      </div>
    )
  }

  const rsvpBtn = () => {
    return (
      <button className="rsvp-submit-btn" type="submit"><i className="far fa-envelope"></i> Send RSVP</button>
    )
  }

  if (!data) {
    return null;
  } else {
    return (
      <div className="rsvp-container">

        <form className="rsvp-form">
          <div className="rsvp-content">

            {saturday()}

            {rsvpReply.saturday === "yes" || rsvpReply.saturday === "maybe" ? childrenSaturday() : <></>}

            {rsvpReply.childrenSaturday === "yes" || rsvpReply.childrenSaturday === "maybe" ? childrenNumber() : <></>}

            {/* {rsvpReply.childrenSaturdayNumber ? sunday() : <></>} */}
            
            {rsvpReply.childrenSaturday === "no" || rsvpReply.childrenSaturdayNumber ? sunday() : <></>}

            {rsvpReply.sunday === "yes" || rsvpReply.sunday === "no" || rsvpReply.sunday === "maybe" ? diet() : <></>}

            {rsvpReply.diet === "vegan" || rsvpReply.diet === "vegetarian" ? rsvpBtn() : <></>}

            {rsvpReply.diet === "other" ? SpecifyOtherDiet() : <></>}

            {rsvpReply.otherDiet ? rsvpBtn() : <></>}

          </div>
        </form>
      </div>
    )
  }
};