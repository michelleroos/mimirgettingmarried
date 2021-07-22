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

            {/* <label>Friday
                <br />
                <input type="radio" name="friday" value="yes" {...register('friday')} /> Yes
                <input type="radio" name="friday" value="no" {...register('friday')} /> No
                <input type="radio" name="friday" value="maybe" {...register('friday')} /> Maybe
            </label> */}
            <br />
            <input type="text" placeholder="Friday" name="friday" {...register('friday')} />
            <br />
            <input type="text" placeholder="Saturday" name="saturday" {...register('saturday')} />
            <br />
            <input type="text" placeholder="Sunday" name="sunday" {...register('sunday')} />
            <br />
            <input type="text" placeholder="Diet" name="diet" {...register('diet')} />
            <br />
            <input type="submit" />
        </form>
    )
};