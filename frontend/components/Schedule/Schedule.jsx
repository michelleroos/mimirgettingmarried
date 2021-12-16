import React, { useEffect } from 'react';
import Timeline from './Timeline';
import timelineData from './data';

export default function Schedule() {

  useEffect(() => {
    document.title = `Schedule | #mimirgettingmarried`;
  });

  const Schedule = () => (
    <div id="schedule-container">
      {/* <Timeline /> */}
      <div id="timeline-container">
        {timelineData.map((data, idx) => {
          return (
            <div id="timeline-item">
              <div id="timeline-item-header">
                <div id="day" className="schedule-detail">
                  <p>{data.day}</p>
                </div>
                <div id="time" className="schedule-detail">
                  <p>{data.time}</p>
                </div>
              </div>
              <div id="text" className="schedule-detail">
                <p>{data.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
  return Schedule();
};

