import React from 'react';

export default function TimelineItem({ data }) {
  return (
    <div id="timeline-item">
      <div id="timeline-item-content">
        <div id="day" className="schedule-detail">
          <p>{data.day}</p>
        </div>
        <div id="time" className="schedule-detail">
          <p>{data.time}</p>
        </div>
        <div id="text" className="schedule-detail">
          <p>{data.text}</p>
        </div>
        <span className="circle"></span>
      </div>
    </div>
  )
}
