import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function RSVPContainer({currentUser, sendRSVP}) {
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
        <form className="rsvp-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="friday">
                <label>Are you joining us on Friday?</label>
                <div className="inputs">
                    <div className="radio">
                        <input {...register("friday", { required: true })} type="radio" value="Yes" /> Yes
                    </div>
                    <div className="radio">
                        <input {...register("friday", { required: true })} type="radio" value="No" /> No
                    </div>
                    <div className="radio">
                        <input {...register("friday", { required: true })} type="radio" value="Maybe" /> Maybe
                    </div>
                </div>
            </div>

            <div className="saturday">
                <label>Are you joining us on Saturday?</label>
                <div className="inputs">
                    <div className="radio">
                        <input {...register("saturday", { required: true })} type="radio" value="Yes" /> Yes
                    </div>
                    <div className="radio">
                        <input {...register("saturday", { required: true })} type="radio" value="No" /> No
                    </div>
                    <div className="radio">
                        <input {...register("saturday", { required: true })} type="radio" value="Maybe" /> Maybe
                    </div>
                </div>
            </div>

            <div className="sunday">
                <label>Are you joining us on Sunday?</label>
                <div className="inputs">
                    <div className="radio">
                        <input {...register("sunday", { required: true })} type="radio" value="Yes" /> Yes
                    </div>
                    <div className="radio">
                        <input {...register("sunday", { required: true })} type="radio" value="No" /> No
                    </div>
                    <div className="radio">
                        <input {...register("sunday", { required: true })} type="radio" value="Maybe" /> Maybe
                    </div>
                </div>
            </div>

            <div className="diet">
                <label>Do you have any dietary restrictions?</label>
                <div id="diet">
                    <div className="radio">
                        <input {...register("diet")} type="radio" value="Vegetarian" /> Vegetarian
                    </div>
                    <div className="radio">
                        <input {...register("diet")} type="radio" value="Vegan" /> Vegan
                    </div>
                    <input type="text" placeholder="Other" name="diet" {...register('diet')} />
                </div>
            </div>

            <div className="phone">
                <label>Please enter your phone number (incl country code)</label>
                <div id="diet">
                    <input type="text" placeholder="Phone number" name="diet" {...register('diet')} />
                </div>
            </div>

            <div className="address">
                <label>Please enter your full mailing address</label>
                <div id="diet">
                    <input type="text" placeholder="Address" name="diet" {...register('diet')} />
                </div>
            </div>

            {/* <input type="text" placeholder="Friday" name="friday" {...register('friday')} />
            <br />
            <input type="text" placeholder="Saturday" name="saturday" {...register('saturday')} />
            <br />
            <input type="text" placeholder="Sunday" name="sunday" {...register('sunday')} />
            <br />
            <input type="text" placeholder="Diet" name="diet" {...register('diet')} />
            <br /> */}
            <input type="submit" />
        </form>
    )
};