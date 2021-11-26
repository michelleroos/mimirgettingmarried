import React, { useEffect, useState } from 'react';
import faqData from './data';

export default function Faq() {

  useEffect(() => {
    document.title = `FAQ | #mimirgettingmarried`;
  });

  const [clicked, setClicked] = useState(false);
  const updateClicked = () => {
    if (clicked) setClicked(false)
    if (!clicked) setClicked(true)
  };

  const Faq = () => (
    <div id="faq-wrapper">
      <div id="faq-container">
        {faqData.map((data, idx) => {
          return (
            <div className="faq-item" key={idx}>
              <div className="question" onClick={() => updateClicked()}>
                <h4>
                  {data.q}
                </h4>
                <h4 className={clicked ? "faq-hide" : "faq-plus"}>+</h4>
                <h4 className={clicked ? "faq-minus" : "faq-hide"}>-</h4>
              </div>
              <div className="answer">
                <p className={clicked ? "faq-answer" : "faq-hide"}>
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

