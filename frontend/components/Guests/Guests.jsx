import React, { useEffect } from 'react';

export default function Guests() {

    useEffect(() => {
        document.title = `Guests | #mimirgettingmarried`;
    });

    const Guests = () => (
        <div className="account">
            <h1>Guests</h1>
        </div>
    );
    return Guests();
};

