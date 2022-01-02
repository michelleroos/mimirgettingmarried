import React, { useEffect, useState } from 'react';
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
  const [users, setUsers] = useState(null);

  // const updateValues = (responses) => {
  //   setData(responses.values);
  //   console.log(data);
  //   const userArr = [];
  //   responses.values.forEach((val) => {
  //     userArr.push(val[0])
  //   })
  //   setUsers(userArr);
  // }

  const [rsvpReq, setRsvpReq] = useState({
    user: null,
    friday: null,
    childrenFriday: null,
    childrenFridayNumber: null,
    saturday: null,
    childrenSaturday: null,
    childrenSaturdayNumber: null,
    sunday: null,
    diet: null,
    otherDiet: null,
  });

  const updateRsvp = (val) => {
    if (val === "fri-yes") {
      setRsvpReq({ ...rsvpReq, friday: "yes" });
      setShowFriday(false);
      setShowSaturday(true);
    } else if (val === "fri-no") {
      setRsvpReq({ ...rsvpReq, friday: "no" });
      setShowFriday(false);
      setShowSaturday(true);
    } else if (val === "fri-maybe") {
      setRsvpReq({ ...rsvpReq, friday: "maybe" });
      setShowFriday(false);
      setShowSaturday(true);
    } else if (val === "sat-yes") {
      setRsvpReq({ ...rsvpReq, saturday: "yes" });
      setShowSaturday(false);
      setShowChildrenSaturday(true);
    } else if (val === "sat-no") {
      setRsvpReq({ ...rsvpReq, saturday: "no" });
      setShowSaturday(false);
      setShowSunday(true);
    } else if (val === "sat-maybe") {
      setRsvpReq({ ...rsvpReq, saturday: "maybe" });
      setShowSaturday(false);
      setShowChildrenSaturday(true);
    } else if (val === "sat-children-yes") {
      setRsvpReq({ ...rsvpReq, childrenSaturday: "yes" });
      setShowChildrenSaturdayNumber(true);
      // setShowChildrenSaturday(false);
      // setShowSunday(true);
    } else if (val === "sat-children-no") {
      setRsvpReq({ ...rsvpReq, childrenSaturday: "no" });
      setShowSaturday(false);
      setShowChildrenSaturdayNumber(false);
      setShowSunday(true);
    } else if (val === "sat-children-maybe") {
      setRsvpReq({ ...rsvpReq, childrenSaturday: "maybe" });
      setShowChildrenSaturdayNumber(true);
      // setShowChildrenSaturday(false);
      // setShowSunday(true);
    } else if (!isNaN(val)) {
      setRsvpReq({ ...rsvpReq, childrenSaturdayNumber: val });
      setShowSaturday(false);
      setShowChildrenSaturdayNumber(false);
      setShowSunday(true);
    } else if (val === "sun-yes") {
      setRsvpReq({ ...rsvpReq, sunday: "yes" });
      setShowSunday(false);
      setChooseDiet(true);
    } else if (val === "sun-no") {
      setRsvpReq({ ...rsvpReq, sunday: "no" });
      setShowSunday(false);
      setNoJoin(true);
      setRsvpOption(true);
    } else if (val === "sun-maybe") {
      setRsvpReq({ ...rsvpReq, sunday: "maybe" });
      setShowSunday(false);
      setChooseDiet(true);
    } else if (val === "vegan") {
      setRsvpReq({ ...rsvpReq, diet: "vegan" });
      setChooseDiet(false);
      setRsvpOption(true);
    } else if (val === "vegetarian") {
      setRsvpReq({ ...rsvpReq, diet: "vegetarian" });
      setChooseDiet(false);
      setRsvpOption(true);
    } else if (val === "other") {
      setRsvpReq({ ...rsvpReq, diet: "other" });
      setChooseOtherDiet(true);
    } else if (isNaN(Number(val))) {
      setRsvpReq({ ...rsvpReq, otherDiet: val });
      setRsvpOption(true);
      // setShowOtherDiet(false);
    }
  }

  const sendRsvp = (req) => {
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req)
    };
    fetch("http://localhost:3001/api/rsvp", reqOptions)
      .then(res => console.log('sent!'))
  }

  const [showFriday, setShowFriday] = useState(true);

  const Friday = () => {
    return (
      <div className="rsvp-q">
        <h2>Are you joining us on Friday, 22 of July?</h2>
        <div className="inputs">
          <button className={rsvpReq.friday === "yes" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("fri-yes")}>Yes</button>
          <button className={rsvpReq.friday === "no" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("fri-no")}>No</button>
          <button className={rsvpReq.friday === "maybe" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("fri-maybe")}>Maybe</button>
          {showFriday && <i className="fas fa-caret-right"></i>}
        </div>        
      </div>
    )
  }

  // const [showChildrenFriday, setShowChildrenFriday] = useState(false);

  // const ChildrenFriday = () => {
  //   return (
  //     <div className="rsvp-q">
  //       <h2>Are you bringing any children?</h2>
  //       <div className="inputs">
  //         <button className={rsvpReq.childrenFriday === "yes" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("fri-children-yes")}>Yes</button>
  //         <button className={rsvpReq.childrenFriday === "no" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("fri-children-no")}>No</button>
  //         <button className={rsvpReq.childrenFriday === "maybe" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("fri-children-no")}>Maybe</button>
  //       </div>
  //     </div>
  //   )
  // }

  // const [showChildrenFridayNumber, setShowChildrenFridayNumber] = useState(null);

  // const ChildrenFridayNumber = () => {
  //   return (
  //     <div className="rsvp-q">
  //       <h2>How many?</h2>
  //       <div className="inputs">
  //         {/* <input id="children-number" type="text" onChange={e => updateRsvp(e.target.value)} /> */}
  //         <input id="children-number" type="text" onChange={e => setRsvpReq({ ...rsvpReq, childrenFridayNumber: Number(e.target.value) })} />
  //       </div>
  //     </div>
  //   )
  // }

  const [showSaturday, setShowSaturday] = useState(false);

  const Saturday = () => {
    return (
      <div className="rsvp-q">
        <h2>Are you joining us on Saturday, 23 of July?</h2>
        <div className="inputs">
          <i className="fas fa-caret-left"></i>
          <button className={rsvpReq.saturday === "yes" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-yes")}>Yes</button>
          <button className={rsvpReq.saturday === "no" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-no")}>No</button>
          <button className={rsvpReq.saturday === "maybe" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-maybe")}>Maybe</button>
          <i className="fas fa-caret-right"></i>
        </div>
        
      </div>
    )
  }

  const [showChildrenSaturday, setShowChildrenSaturday] = useState(false);

  const ChildrenSaturday = () => {
    return (
      <div className="rsvp-q">
        <h2>Are you bringing any children?</h2>
        <div className="inputs">
          <i className="fas fa-caret-left"></i>
          <button className={rsvpReq.childrenSaturday === "yes" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-children-yes")}>Yes</button>
          <button className={rsvpReq.childrenSaturday === "no" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-children-no")}>No</button>
          <button className={rsvpReq.childrenSaturday === "maybe" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sat-children-maybe")}>Maybe</button>
          <i className="fas fa-caret-right"></i>
        </div>
        
      </div>
    )
  }

  const [showChildrenSaturdayNumber, setShowChildrenSaturdayNumber] = useState(false);

  const ChildrenSaturdayNumber = () => {
    return (
      <div className="rsvp-q">
        <h2>How many?</h2>
        <div className="inputs">
          <i className="fas fa-caret-left"></i>
          {/* <input id="children-number" type="text" onChange={e => updateRsvp(e.target.value)} /> */}
          {/* <input id="children-number" type="text" onChange={e => setRsvpReq({ ...rsvpReq, childrenSaturdayNumber: Number(e.target.value) })} /> */}
          <input id="children-number" type="number" onChange={e => setRsvpReq({ ...rsvpReq, childrenSaturdayNumber: e.target.value })} />
          <i className="fas fa-caret-right"></i>
        </div>
        
      </div>
    )
  }

  const [showSunday, setShowSunday] = useState(false);

  const Sunday = () => {
    return (
      <div className="rsvp-q">
        <h2>Are you joining us on Sunday, 24 of July?</h2>
        <h2>(Sorry - no children allowed)</h2>
        <div className="inputs">
          <i className="fas fa-caret-left"></i>
          <button className={rsvpReq.sunday === "yes" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sun-yes")}>Yes</button>
          <button className={rsvpReq.sunday === "no" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sun-no")}>No</button>
          <button className={rsvpReq.sunday === "maybe" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("sun-maybe")}>Maybe</button>
          <i className="fas fa-caret-right"></i>
        </div>
        
      </div>
    )
  }

  const [chooseDiet, setChooseDiet] = useState(false);

  const Diet = () => {
    return (
      <div className="rsvp-q">
        <h2>Do you have any dietary restrictions?</h2>
        <div className="inputs">
          <i className="fas fa-caret-left"></i>
          <button className={rsvpReq.diet === "vegan" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("vegan")}>Vegan</button>
          <button className={rsvpReq.diet === "vegetarian" ? "btn-clicked veggie" : "rsvp-btn veggie"} onClick={() => updateRsvp("vegetarian")}>Vegetarian</button>
          <button className={rsvpReq.diet === "other" ? "btn-clicked" : "rsvp-btn"} onClick={() => updateRsvp("other")}>Other</button>
          <i className="fas fa-caret-right"></i>
        </div>
        
      </div>
    )
  }

  const [chooseOtherDiet, setOtherChooseDiet] = useState(false);

  const SpecifyOtherDiet = () => {
    return (
      <div className="rsvp-q">
        <h2>Please specify</h2>
        <div className="inputs">
          <i className="fas fa-caret-left"></i>
          <input id="other-diet" type="text" onChange={e => updateRsvp(e.target.value)} />
          <i className="fas fa-caret-right"></i>
        </div>
        
      </div>
    )
  }

  const [rsvpOption, setRsvpOption] = useState(false);

  const RsvpBtn = () => {
    return (
      <button className="rsvp-submit-btn" onClick={() => sendRsvp(rsvpReq)}><i className="far fa-envelope"></i> Send RSVP</button>
    )
  }

  const [noJoin, setNoJoin] = useState(false);

  const NotJoining = () => {
    return (
      <div className="rsvp-q">
        <h2>OK :(</h2>
      </div>
    )
  }

  const formSubmitted = (
    <div id="rsvp-response">
      You've already RSVP'd
    </div>
  )

  const form = (
    <div className="rsvp-content">

      {showFriday && Friday()}

      {showSaturday && Saturday()}

      {showChildrenSaturday && ChildrenSaturday()}

      {showChildrenSaturdayNumber && !rsvpReq.ChildrenSaturdayNumber ? ChildrenSaturdayNumber() : null}

      {showSunday && Sunday()}

      {chooseDiet && Diet()}

      {chooseOtherDiet && SpecifyOtherDiet()}

      {noJoin && NotJoining()}

      {rsvpOption && RsvpBtn()}

      {/* {rsvpReq.friday === "yes" || rsvpReq.friday === "maybe" ? ChildrenFriday() : <></>} */}

      {/* {rsvpReq.childrenFriday === "yes" || rsvpReq.childrenFriday === "maybe" ? ChildrenFridayNumber() : <></>} */}

      {/* {rsvpReq.friday === "no" || rsvpReq.childrenFridayNumber ? Saturday() : <></>}

      {rsvpReq.saturday === "yes" || rsvpReq.saturday === "maybe" ? ChildrenSaturday() : <></>}

      {rsvpReq.childrenSaturday === "yes" || rsvpReq.childrenSaturday === "maybe" ? ChildrenSaturdayNumber() : <></>}

      {rsvpReq.childrenSaturday === "no" || rsvpReq.childrenSaturdayNumber ? Sunday() : <></>}

      {rsvpReq.sunday === "yes" || rsvpReq.sunday === "no" || rsvpReq.sunday === "maybe" ? Diet() : <></>}

      {rsvpReq.diet === "vegan" || rsvpReq.diet === "vegetarian" || rsvpReq.otherDiet ? RsvpBtn() : <></>}

      {rsvpReq.diet === "other" ? SpecifyOtherDiet() : <></>} */}

    </div>
  )

  if (data) {
    return (
      <div className="rsvp-container">
        {form}
        {/* <form className="rsvp-form"> */}
        {/* </form> */}
      </div>
    )
  } else {
    return null;
  }
};