import React from 'react';
import { useForm } from 'react-hook-form';

export default function RSVPContainer() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Friday" name="friday" {...register} />
            {/* <input type="text" placeholder="Saturday" name="saturday" ref={register} /> */}
            {/* <input type="text" placeholder="Diet" name="diet" ref={register} /> */}
            {/* <input type="text" placeholder="Sunday" name="sunday" ref={register} /> */}
            <input type="submit" />
        </form>
    )
};