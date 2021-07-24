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
      <button type="submit"><i class="far fa-envelope"></i> RSVP</button>
    </div>
  )
};