import React, { useEffect } from 'react';

export default function Faq() {

    useEffect(() => {
        document.title = `FAQ | #mimirgettingmarried`;
    });

    const Faq = () => (
        <div className="faq-container">
            <h1>Frequently asked questions</h1>
            <div className="faq">
                <div className="question">
                    <h3>Can we bring kids?</h3>
                    <svg width="15" heigth="10" viewBox="0 0 42 25">
                        <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="answer">
                    <p>Yes!</p>
                </div>
            </div>
        </div>
    );
    return Faq();
};

