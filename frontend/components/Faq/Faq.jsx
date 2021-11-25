import React, { useEffect } from 'react';
import faqData from './data';

export default function Faq() {

  useEffect(() => {
    document.title = `FAQ | #mimirgettingmarried`;
  });

  const Faq = () => (
    <div id="faq-wrapper">
      <div id="faq-container">
        {faqData.map((data, idx) => {
          return (
            <div className="faq-item" key={idx}>
              <div className="question">
                <h3>
                  {data.q}
                </h3>
              </div>
              <div className="answer">
                <p>
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

