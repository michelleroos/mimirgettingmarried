import React, { useEffect } from 'react';

export default function Account() {

    useEffect(() => {
        document.title = `Account | #mimirgettingmarried`;
    });

    const Account = () => (
        <div className="account">
            <h1>Your account</h1>
        </div>
    );
    return Account();
};

