import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div style={{
        height: '100vh',
        // background: 'rgba(30,150,70, 0.2)',
        position: 'relative'
      }}>
        <div className="my-content-wrapper">
          <div id="who" className="who-am-i-wrapper">
            <h2>// Who am&nbsp;<span className="glow">I</span>?</h2>
            <p>
              A developer that makes that thing of yours even better. I can help either with the big picture including solutions architecture or with specifics.
              <br /><br />Speed is key, but so are visuals. 
              I make both worlds meet with reliable, scalable solutions.
            </p>
          </div>
        </div>
        <style jsx>{`
        .who-am-i-wrapper {
          width: 40%;
          max-width: 500px;
          /* background: red; */
          margin-left: 96px;
          /* margin-top: 128px; */
          position: absolute;
          top: 96px;
        }
        .who-am-i-wrapper h2 {
          font-weight: 400;
          font-size: 48px;
          color: #7cb1fe2b;
        }
        .who-am-i-wrapper p {
          font-size: 24px;
          line-height: 1.5;
        }
        
        h2 span.glow {
          color: #44d0c9 !important;
          text-shadow: #189993 1px 0 10px;
          opacity: 1 !important;
          letter-spacing: 5px;
        }
        h2 span.glow:before {
          content: '<';
          color: white;
        }
        h2 span.glow:after {
          content: '>';
          color: white;
        }
        
        @media (max-width: 1023px) {
          .who-am-i-wrapper {
            top: 32px;
          }
          .who-am-i-wrapper p {
            font-size: 18px;
          }
        }
        
        @media (max-width: 550px) {
          .who-am-i-wrapper h2 {
            font-size: 32px !important;
          }
          .who-am-i-wrapper {
            width: calc(100% - 48px);
            margin: 0 24px;
            top: 0;
          }
          .who-am-i-wrapper p {
            font-size: 16px;
          }
        }
        `}</style>
      </div>
    )
  }
}

export default About;