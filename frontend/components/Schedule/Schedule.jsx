import React, { useEffect } from 'react';
import Timeline from './Timeline';
import timelineData from './data';

export default function Schedule() {

  useEffect(() => {
    document.title = `Schedule | #mimirgettingmarried`;
  });

  const Schedule = () => (
    <div id="schedule-container">
      <div class="day-schedule">
        <h2>Friday - 22 July</h2>
        <div className="detailed-schedule-container">
          <div>
            <i class="fas fa-beer"></i>
            <h3>Meet & greet</h3>
            <p>TBD</p>
          </div>
        </div>
      </div>
      <div class="day-schedule">
        <h2>Saturday - 23 July</h2>
        <div className="detailed-schedule-container">
          <div>
            <i class="fas fa-cocktail"></i>
            <h3>Mingle</h3>
            <p>15:00</p>
          </div>
          <div>
            <i class="fas fa-heart"></i>
            <h3>Ceremony</h3>
            <p>16:00</p>
            <p>Villa Richter</p>
          </div>
          <div>
            <i class="fas fa-utensils"></i>
            <h3>Reception</h3>
            <p>18:00</p>
          </div>
          <div>
            <i class="fas fa-guitar"></i>
            <h3>Music</h3>
            <p>20:00</p>
          </div>
          <div>
            <i class="fas fa-hourglass-end"></i>
            <h3>Party ends</h3>
            <p>00:00</p>
          </div>
        </div>
      </div>
      <div class="day-schedule">
        <h2>Sunday - 24 July</h2>
        <div className="detailed-schedule-container">
          <div>
            <i class="fas fa-music"></i>
            <h3>Party</h3>
            <p>17:00</p>
          </div>
        </div>
      </div>
      {/* <Timeline /> */}
      {/* <div id="timeline-container">
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
      </div> */}
    </div>
  );
  return Schedule();
};

