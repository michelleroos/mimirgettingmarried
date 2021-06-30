import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function RSVPContainer(props) {
    console.log(props);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        document.title = `RSVP`;
    });

    const onSubmit = (data) => {
        // console.log(data);
        const info = {
            user: {
                friday: data.friday,
                saturday: data.saturday,
            },
            // id: 
        }
        props.sendRSVP(info);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Friday" name="friday" {...register('friday')} />
            <input type="text" placeholder="Saturday" name="saturday" {...register('saturday')} />
            <input type="submit" />
        </form>
    )
};