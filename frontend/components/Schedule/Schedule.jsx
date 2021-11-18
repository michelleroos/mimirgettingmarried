import React, { useEffect } from 'react';
import Timeline from './Timeline';

export default function Schedule() {

    useEffect(() => {
        document.title = `Schedule | #mimirgettingmarried`;
    });

    const Schedule = () => (
        <div id="schedule-container">
            <Timeline />
        </div>
    );
    return Schedule();
};

