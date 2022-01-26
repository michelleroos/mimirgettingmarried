import React from 'react';

export default function UpdateRsvpModal({ rsvpReq, setUpdateRsvpModal, updateRsvp, changeRsvp }) {

  const closeModal = (e) => {
    if (e.target.id === 'rsvp-modal-bg') setUpdateRsvpModal(false);
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
          <button id="rsvp-submit-btn" onClick={() => changeRsvp(rsvpReq)}>
            <p>Update RSVP</p>
            <i className="far fa-envelope"></i>
          </button>
        </div>
      </div>
    );
  };

  return Modal();
}