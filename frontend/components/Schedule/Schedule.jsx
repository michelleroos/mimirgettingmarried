import React, { useEffect, useState } from 'react';
import Ceremony from './Ceremony';
import Friday from './Friday';
import Mingle from './Mingle';
import Reception from './Reception';
import Sunday from './Sunday';

export default function Schedule() {

  useEffect(() => {
    document.title = `Schedule | #mimirgettingmarried`;
  });

  const close = (e) => {
    if (e.target.classList.contains('modal-bg')) {
      setFriday(false);
      setMingle(false);
      setCeremony(false);
      setReception(false);
      setSunday(false);
    }
  }

  const [friday, setFriday] = useState(false);
  const [mingle, setMingle] = useState(false);
  const [ceremony, setCeremony] = useState(false);
  const [reception, setReception] = useState(false);
  const [sunday, setSunday] = useState(false);

  const Schedule = () => (
    <div id="schedule-container-outer">
      <div id="schedule-container">
        {friday && <Friday close={close} />}
        {mingle && <Mingle close={close} />}
        {ceremony && <Ceremony close={close} />}
        {reception && <Reception close={close} />}
        {sunday && <Sunday close={close} />}
        <div class="day-schedule">
          <h2>Friday - 22 July</h2>
          <div className="detailed-schedule-container">
            <div className="schedule-details" id="friday-modal" onClick={() => setFriday(true)}>
              <i class="fas fa-beer"></i>
              <h3>Meet & greet</h3>
              <p className="hover">TBD</p>
            </div>
          </div>
        </div>
        <div class="day-schedule">
          <h2>Saturday - 23 July</h2>
          <div className="detailed-schedule-container">
            <div className="schedule-details" id="saturday-mingle-modal" onClick={() => setMingle(true)}>
              <i class="fas fa-cocktail"></i>
              <h3>Mingle</h3>
              <p>15:00</p>
              <p className="hover">Villa Richter Fountain</p>
            </div>
            <div className="schedule-details" id="saturday-ceremony-modal" onClick={() => setCeremony(true)}>
              <i class="fas fa-heart"></i>
              <h3>Ceremony</h3>
              <p>16:00</p>
              <p className="hover">Villa Richter</p>
            </div>
            <div className="schedule-details" id="saturday-receotion-modal" onClick={() => setReception(true)}>
              <i class="fas fa-utensils"></i>
              <h3>Reception</h3>
              <p>18:00</p>
              <p className="hover">Villa Richter</p>
            </div>
            <div className="schedule-details">
              <i class="fas fa-guitar"></i>
              <h3>Music</h3>
              <p>20:00</p>
              <p>Villa Richter</p>
            </div>
            <div className="schedule-details">
              <i class="fas fa-hourglass-end"></i>
              <h3>Party ends</h3>
              <p>00:00</p>
            </div>
          </div>
        </div>
        <div class="day-schedule">
          <h2>Sunday - 24 July</h2>
          <div className="detailed-schedule-container">
            <div className="schedule-details" id="sunday-modal" onClick={() => setSunday(true)}>
              <i class="fas fa-music"></i>
              <h3>Party continues</h3>
              <p>17:00 until late</p>
              <p className="hover">GLASS Bar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return Schedule();
};

