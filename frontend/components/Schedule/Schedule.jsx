import React, { useEffect } from 'react';

export default function Schedule() {

    useEffect(() => {
        document.title = `Schedule | #mimirgettingmarried`;
    });

    const Schedule = () => (
        <div className="account">
            <table>
                <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Activity</th>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>20:00</td>
                    <td>Drinks on us</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>20:00</td>
                    <td>Drinks on us</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>20:00</td>
                    <td>Drinks on us</td>
                </tr>
            </table>
        </div>
    );
    return Schedule();
};

