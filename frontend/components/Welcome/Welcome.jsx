import React, { useEffect, useState } from 'react';
import UploadForm from '../UploadForm/UploadForm';
import AMImageGrid from './AMImageGrid';

export default function Welcome({ currentUser, pathname }) {
    console.log(pathname);

    useEffect(() => {
        document.title = `Welcome | #mimirgettingmarried`;
    });

    const loggedOut = () => {
        return (
            <div className="p">
                <p>Please log in to RSVP and see wedding details</p>
            </div>
        )

    }

    const loggedIn = () => {
        return (
            <div className="p">
                <p>Welcome to join our wedding! On this website you can RSVP, browse our guestlist, see information about the location and schedule, find common questions and answers on the FAQ and manage your account information. If you have any questions or concerns, please don't hesitate to reach out to Michelle on +1 (650) 933 2293.</p>
                <br />
                <p>We don't do engagement photos, but here are some of our favorite photos of us since we met in 2016 :)</p>
            </div>

        )
    }

    return (
        <div className="welcome">
            <h1>We're getting married!</h1>
            <h4>23 JULY 2022 | SATURDAY | PRAGUE</h4>
            <br />
            {currentUser ? loggedIn() : loggedOut()}
            <UploadForm pathname={pathname}/>
            <AMImageGrid />
        </div>
    )
};