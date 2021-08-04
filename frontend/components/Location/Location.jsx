import React, { useEffect } from 'react';
import Map from './Map';

export default function Location() {

    useEffect(() => {
        document.title = `Location | #mimirgettingmarried`;
    });

    return (
        <div className="location-container">
            <Map />
            <h1>Villa Richter</h1>
            <p>Villa Richter is a part of the St Wenceslas Vineyard complex at Prague Castle. The neoclassical Villa features restaurant Piano Nobile which has a sunny terrace overlooking the vineyard. The  menu at Piano Nobile is inspired by Czech and European cousine and uses seasonal and local ingredients.</p>
        </div>
    )

};

