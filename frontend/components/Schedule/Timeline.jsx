import React from 'react';
import timelineData from './data';
import TimelineItem from './timelineItem';

export default function Timeline() {
  return (
    <div id="timeline-container">
      {timelineData.map((data, idx) => {
        return (
        <TimelineItem data={data} key={idx}/>
      )})}
    </div>
  )
}
