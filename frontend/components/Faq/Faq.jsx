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
  })

  const updateClicked = (num) => {
    if (expand[num]) setExpand({ ...expand, [num]: false });
    if (!expand[num]) setExpand({ ...expand, [num]: true });
  };

  const expandAll = () => {
    setExpand({
      0: true,
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true,
      10: true,
      11: true,
    })
  }

  const collapseAll = () => {
    setExpand({
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
    })
  }

  const Faq = () => (
    <div id="faq-wrapper">
      <div id="faq-container">
        <div id="set-all">
          <i class="fas fa-expand-alt" onClick={() => expandAll()}></i>
          <i class="fas fa-compress-alt" onClick={() => collapseAll()}></i>
        </div>
        {faqData.map((data, idx) => {
          return (
            <div className="faq-item" key={idx}>
              <div className="question" onClick={() => updateClicked(idx)}>
                <h4>
                  {data.q}
                </h4>
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

