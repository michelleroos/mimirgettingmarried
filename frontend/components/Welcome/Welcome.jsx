import React, { useEffect, useState } from 'react';
import UploadForm from '../UploadForm/UploadForm';
import AMImageGrid from './AMImageGrid';

export default function Welcome(ownProps) {
    const pathname = ownProps.location.pathname;

    useEffect(() => {
        document.title = `Welcome | #mimirgettingmarried`;
    });

    return (
        <div className="welcome">
            <UploadForm pathname={pathname}/>
            <h1>Gallery</h1>
            <AMImageGrid />
        </div>
    )
};