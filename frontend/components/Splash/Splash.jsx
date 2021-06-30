import React, { useEffect } from 'react';

export default function Splash () {

    useEffect(() => {
        document.title = `Welcome | #mimirgettingmarried`;
    });

    const welcome = () => (
        <div className="welcome">
            <h1>Amir & Michelle getting married</h1>
        </div>
    );
    return welcome();
};

