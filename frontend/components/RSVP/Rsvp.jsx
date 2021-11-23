import React, { useEffect, useState } from 'react';
import RSVPModal from './RsvpModal';
import { useForm } from 'react-hook-form';

export default function RSVPContainer({ currentUser, sendRSVP }) {
  
  useEffect(() => {
    document.title = `RSVP | #mimirgettingmarried`;
  });

  const { register, handleSubmit } = useForm();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/rsvp")
      .then((res) => res.json())
      .catch((err) => console.log(err))
      // .then((data) => setData(data.message));
  }, []);

  const [clickSaturday, setClickSaturday] = useState({
    yes: false,
    no: false,
    maybe: false
  });

  const yesSaturday = () => {
    setClickSaturday(prevState => ({...prevState, yes: true, no: false, maybe: false}));
  }

  const noSaturday = () => {
    setClickSaturday(prevState => ({...prevState, yes: false, no: true, maybe: false}));
  }

  const maybeSaturday = () => {
    setClickSaturday(prevState => ({...prevState, yes: false, no: false, maybe: true}));
  }

  const [clickSaturdayChildren, setClickSaturdayChildren] = useState({
    yes: false,
    no: false,
    maybe: false
  });

  const yesSaturdayChildren = () => {
    setClickSaturdayChildren(prevState => ({...prevState, yes: true, no: false, maybe: false}));
  }

  const noSaturdayChildren = () => {
    setClickSaturdayChildren(prevState => ({...prevState, yes: false, no: true, maybe: false}));
  }

  const maybeSaturdayChildren = () => {
    setClickSaturdayChildren(prevState => ({...prevState, yes: false, no: false, maybe: true}));
  }

  const [clickSunday, setClickSunday] = useState({
    yes: false,
    no: false,
    maybe: false
  });

  const yesSunday = () => {
    setClickSunday(prevState => ({...prevState, yes: true, no: false, maybe: false}));
  }

  const noSunday = () => {
    setClickSunday(prevState => ({...prevState, yes: false, no: true, maybe: false}));
  }

  const maybeSunday = () => {
    setClickSunday(prevState => ({...prevState, yes: false, no: false, maybe: true}));
  }

  const [clickDiet, setClickDiet] = useState({
    vegan: false,
    vegetarian: false,
    other: false
  });

  const veganDiet = () => {
    setClickDiet(prevState => ({...prevState, vegan: true, vegetarian: false, other: false}));
  }

  const vegetarianDiet = () => {
    setClickDiet(prevState => ({...prevState, vegan: false, vegetarian: true, other: false}));
  }

  const otherDiet = () => {
    setClickDiet(prevState => ({...prevState, vegan: false, vegetarian: false, other: true}));
  }

  const onSubmit = (data) => {
    const info = {
      user: {
        friday: data.friday,
        saturday: data.saturday,
        sunday: data.sunday,
        diet: data.diet,
      },
      id: currentUser.id
    }
    sendRSVP(info);
  }

  const childrenSaturday = () => {
    return (
      <div className="rsvp-q">
        <h2>Are you bringing any children?</h2>
        <div className="inputs">
          <button className={clickSaturdayChildren.yes ? "btn-clicked" : "rsvp-btn"} onClick={yesSaturdayChildren}>Yes</button>
          <button className={clickSaturdayChildren.no ? "btn-clicked" : "rsvp-btn"} onClick={noSaturdayChildren}>No</button>
          <button className={clickSaturdayChildren.maybe ? "btn-clicked" : "rsvp-btn"} onClick={maybeSaturdayChildren}>Maybe</button>
        </div>
      </div>
    )
  }

  const childrenNumber = () => {
    return (
      <div className="rsvp-q">
        <h2>How many?</h2>
        <div className="inputs">
          <input id="children-number" type="text" />
        </div>
      </div>
    )
  }

  const sunday = () => {
      return (
        <div className="rsvp-q">
          <h2>Are you joining us on Sunday, 24 of July?</h2>
          <h2>(No children allowed)</h2>
          <div className="inputs">
            <button className={clickSunday.yes ? "btn-clicked" : "rsvp-btn"} onClick={yesSunday}>Yes</button>
            <button className={clickSunday.no ? "btn-clicked" : "rsvp-btn"} onClick={noSunday}>No</button>
            <button className={clickSunday.maybe ? "btn-clicked" : "rsvp-btn"} onClick={maybeSunday}>Maybe</button>
          </div>
        </div>
      )
  }

  const childrenSunday = () => {
    return null;
    // return (
    //   <div className="rsvp-q">
    //     <h2>Children are not allowed to join on Sunday</h2>
    //   </div>
    // )
  }

  const diet = () => {
    return (
      <div className="rsvp-q">
        <h2>Do you have any dietary restrictions?</h2>
        <div className="inputs">
          <button className={clickDiet.vegan ? "btn-clicked" : "rsvp-btn"} onClick={veganDiet}>Vegan</button>
          <button className={clickDiet.vegetarian ? "btn-clicked veggie" : "rsvp-btn veggie"} onClick={vegetarianDiet}>Vegetarian</button>
          <button className={clickDiet.other ? "btn-clicked" : "rsvp-btn"} onClick={otherDiet}>Other</button>
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

  const rsvp = () => {
    return (
      <button className="rsvp-submit-btn" type="submit"><i className="far fa-envelope"></i> Send RSVP</button>
    )
  }

  if (!data) {
    return null;
  } else {
    console.log(data);
    return (
      <div className="rsvp-container">
  
        <form className="rsvp-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="rsvp-content">
            
            <div className="rsvp-q">
              <h2>Are you joining us on Saturday, 23 of July?</h2>
              <div className="inputs">
                <button className={clickSaturday.yes ? "btn-clicked" : "rsvp-btn"} onClick={yesSaturday}>Yes</button>
                <button className={clickSaturday.no ? "btn-clicked" : "rsvp-btn"} onClick={noSaturday}>No</button>
                <button className={clickSaturday.maybe ? "btn-clicked" : "rsvp-btn"} onClick={maybeSaturday}>Maybe</button>
                {/* <div className="checkbox">
                  <input {...register("saturday", { required: true })} type="checkbox" value="Yes" /> Yes
                </div>
                <div className="checkbox">
                  <input {...register("saturday", { required: true })} type="checkbox" value="No" /> No
                </div>
                <div className="checkbox">
                  <input {...register("saturday", { required: true })} type="checkbox" value="Maybe" /> Maybe
                </div> */}
              </div>
            </div>
  
            {clickSaturday.yes || clickSaturday.maybe ? childrenSaturday() : <></>}
  
            {clickSaturdayChildren.yes || clickSaturdayChildren.maybe ? childrenNumber() : <></>}
  
            {clickSaturday.no || clickSaturdayChildren.yes || clickSaturdayChildren.no ||clickSaturdayChildren.maybe ? sunday() : <></>}
  
            {clickSunday.yes || clickSunday.maybe ? childrenSunday() : <></>}
  
            {clickSunday.no || clickSunday.yes || clickSunday.maybe ? diet() : <></>}
  
            {clickDiet.other ? SpecifyOtherDiet() : <></>}
  
            {clickDiet.vegan || clickDiet.vegetarian || clickDiet.other? rsvp() : <></>}
  
          </div>
        </form>
  
  
        {/* <button className="rsvp-btn" type="submit" onClick={() => {setOpenModal(true)}}>
          <i class="far fa-envelope"></i> RSVP
        </button>
        {openModal && <RSVPModal currentUser={currentUser} sendRSVP={sendRSVP} closeModal={setOpenModal}/>} */}
      </div>
    )
  }
};