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
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Are you joining us on Friday?</label>
            <input {...register("friday", { required: true })} type="radio" value="Yes" /> Yes
            <input {...register("friday", { required: true })} type="radio" value="No" /> No
            <input {...register("friday", { required: true })} type="radio" value="Maybe" /> Maybe
            <br />

            <label>Are you joining us on Saturday?</label>
            <input {...register("saturday", { required: true })} type="radio" value="Yes" /> Yes
            <input {...register("saturday", { required: true })} type="radio" value="No" /> No
            <input {...register("saturday", { required: true })} type="radio" value="Maybe" /> Maybe
            <br />

            <label>Are you joining us on Sunday?</label>
            <input {...register("sunday", { required: true })} type="radio" value="Yes" /> Yes
            <input {...register("sunday", { required: true })} type="radio" value="No" /> No
            <input {...register("sunday", { required: true })} type="radio" value="Maybe" /> Maybe

            <label>Do you have any dietary restrictions?</label>
            <input {...register("diet", { required: true })} type="radio" value="Vegetarian" /> Vegetarian
            <input {...register("diet", { required: true })} type="radio" value="Vegan" /> Vegan
            {/* <input type="text" placeholder="Other" name="diet" {...register('diet')} /> */}
            <br />

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