import React, { useEffect, useState } from 'react';
import faqData from './data';

export default function Faq() {

  useEffect(() => {
    document.title = `FAQ | #mimirgettingmarried`;
  });

  const [expand, setExpand] = useState({
    0: false,
    1: false, 
    2: false, 
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false
  });

  const updateClicked = (num) => {
    if (expand[num]) setExpand({ ...expand, [num]: false });
    if (!expand[num]) setExpand({ ...expand, [num]: true });
  };

  const [expanded, setExpanded] = useState(false);

  const setAll = (expandedStatus) => {
    setExpanded(!expandedStatus);
    setExpand({
      0: !expandedStatus,
      1: !expandedStatus,
      2: !expandedStatus,
      3: !expandedStatus,
      4: !expandedStatus,
      5: !expandedStatus,
      6: !expandedStatus,
      7: !expandedStatus,
      8: !expandedStatus,
      9: !expandedStatus,
      10: !expandedStatus,
      11: !expandedStatus,
      12: !expandedStatus
    });
  };

  const Faq = () => (
    <div id="faq-wrapper">
      <div id="faq-container">
        <h1>Frequently asked questions</h1>

        <div className="faq-item">
          <div className="question" onClick={() => setAll(expanded)}>
            {expanded ? <h5>Collapse all</h5> : <h5>Expand all</h5>}
            
            {expanded ? 
            <i className="fas fa-compress-alt"></i> :
            <i className="fas fa-expand-alt"></i>}
          </div>
        </div>

        {faqData.map((data, idx) => {
          return (
            <div className="faq-item" key={idx}>
              <div className="question" onClick={() => updateClicked(idx)}>
                <h5>
                  {data.q}
                </h5>
                <h4 className={expand[idx] ? "faq-hide" : "faq-plus"}>+</h4>
                <h4 className={expand[idx] ? "faq-minus" : "faq-hide"}>-</h4>
              </div>
              <div className="answer">
                <p className={expand[idx] ? "faq-answer" : "faq-hide"}>
                  {data.a}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
  return Faq();
};

