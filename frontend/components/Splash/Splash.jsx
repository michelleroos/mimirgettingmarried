import React, { useEffect } from 'react';

export default function Splash () {

    useEffect(() => {
        document.title = `Welcome | #mimirgettingmarried`;
    });

    const welcome = () => (
        <div className="title">
            <h1>Amir & Michelle</h1>
            <h1>Prague / July 23 2022</h1>
        </div>
    );
    return welcome();
};

