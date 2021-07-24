import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function RSVPContainer({ currentUser, sendRSVP }) {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    document.title = `RSVP | #mimirgettingmarried`;
  });

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

  return (
    <div className="rsvp-container">
      {/* <div className="image">
        <img src="https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/IMG_3125.jpeg?alt=media&token=329df3f9-01f2-436e-9ccc-2b3a3acacbab" alt="rsvp-img" />
      </div> */}

      <div className="rsvp-form-container">
        <form className="rsvp-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="rsvp-conent">
            <div className="rsvp-q">
              <label>Are you joining us on Friday?</label>
              <div className="inputs">
                <div className="checkbox">
                  <input {...register("friday", { required: true })} type="checkbox" value="Yes" />
                  <p>Yes</p>
                </div>
                <div className="checkbox">
                  <input {...register("friday", { required: true })} type="checkbox" value="No" /> No
                </div>
                <div className="checkbox">
                  <input {...register("friday", { required: true })} type="checkbox" value="Maybe" /> Maybe
                </div>
              </div>
            </div>
            <br />
            <div className="rsvp-q">
              <label>Are you joining us on Saturday?</label>
              <div className="inputs">
                <div className="checkbox">
                  <input {...register("saturday", { required: true })} type="checkbox" value="Yes" /> Yes
                </div>
                <div className="checkbox">
                  <input {...register("saturday", { required: true })} type="checkbox" value="No" /> No
                </div>
                <div className="checkbox">
                  <input {...register("saturday", { required: true })} type="checkbox" value="Maybe" /> Maybe
                </div>
              </div>
            </div>
            <br />
            <div className="rsvp-q">
              <label>Are you joining us on Sunday?</label>
              <div className="inputs">
                <div className="checkbox">
                  <input {...register("sunday", { required: true })} type="checkbox" value="Yes" /> Yes
                </div>
                <div className="checkbox">
                  <input {...register("sunday", { required: true })} type="checkbox" value="No" /> No
                </div>
                <div className="checkbox">
                  <input {...register("sunday", { required: true })} type="checkbox" value="Maybe" /> Maybe
                </div>
              </div>
            </div>
            <br />
            <div className="rsvp-q">
              <label>Do you have any dietary restrictions?</label>
              <div className="inputs">
                <div className="checkbox">
                  <input {...register("diet")} type="checkbox" value="Vegetarian" /> Vegetarian
                </div>
                <div className="checkbox">
                  <input {...register("diet")} type="checkbox" value="Vegan" /> Vegan
                </div>
                <div className="checkbox">
                  <input {...register("diet")} type="checkbox" value="Other" /> Other
                </div>
              </div>
              <div className="inputs">
                <input className="text" type="text" placeholder="Other" name="diet" {...register('diet')} />
              </div>
            </div>
            <br />
            {/* <div className="rsvp-q">
              <label>Please enter your phone number (incl country code)</label>
              <div id="diet">
                <input type="text" placeholder="Phone number" name="diet" {...register('diet')} />
              </div>
            </div>
            <br />
            <div className="rsvp-q">
              <label>Please enter your full mailing address</label>
              <div id="diet">
                <input type="text" placeholder="Address" name="diet" {...register('diet')} />
              </div>
            </div>
            <br /> */}
            {/* <input type="text" placeholder="Friday" name="friday" {...register('friday')} />
                              <br />
                              <input type="text" placeholder="Saturday" name="saturday" {...register('saturday')} />
                              <br />
                              <input type="text" placeholder="Sunday" name="sunday" {...register('sunday')} />
                              <br />
                              <input type="text" placeholder="Diet" name="diet" {...register('diet')} />
                              <br /> */}
            <button type="submit"><i class="far fa-envelope"></i> Send RSVP</button>
          </div>
        </form>
      </div>
    </div>
  )
};