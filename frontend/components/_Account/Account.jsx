import React, { useEffect } from 'react';
import UploadForm from '../UploadForm/UploadForm';

export default function Account(ownProps) {
    const pathname = ownProps.location.pathname;

    useEffect(() => {
        document.title = `Account | #mimirgettingmarried`;
    });

    return (
        <div className="account">
            <UploadForm pathname={pathname} />
        </div>
    )
};