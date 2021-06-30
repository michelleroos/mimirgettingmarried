import React, { useEffect } from 'react';

export default function Faq() {

    useEffect(() => {
        document.title = `FAQ | #mimirgettingmarried`;
    });

    const Faq = () => (
        <div className="account">
            <h1>Faq</h1>
        </div>
    );
    return Faq();
};

