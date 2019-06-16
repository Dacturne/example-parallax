import React from "react";
import Navbar from "../Navbar/Navbar";
import FloatingShapes from "../FloatingShapes/FloatingShapes";

class Header extends React.Component {
  render() {
    return (
      <div className="" {...this.props}>
        <FloatingShapes />
        <div className="object-wrapper speed-2">
          <div className="hero-text">
            <h1>
              Hi, I'm&nbsp;<span>dacturne</span>,<br />a <span>web</span>{" "}
              developer
            </h1>
          </div>
        </div>
        <div className="page-content">
          <Navbar />
          <img
            id="logo-floating"
            className="unselectable"
            alt="dacturne logo in 3d"
            src="/static/logo_3d.svg"
          />
        </div>
        <style global jsx>{`
        #logo-floating {
          position: absolute;
          right: -20vw;
          top: 96px;
          width: 80%;
          height: 145vh;
        }
        
        .parallax {
          perspective: 1px;
          height: 100vh;
          overflow-x: hidden;
          overflow-y: auto;
        }
        
        .object-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: none;
          justify-content: center;
        }
        
        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          /* background: red; */
        }
        
        .speed-1 {
          transform: translateZ(-1px) scale(2);
        }
            
        .speed-2 {
          transform: translateZ(-2px) scale(3);
        }
        
        .speed-3 {
          transform: translateZ(-3px) scale(4);
        }
        
        .page-content {
          height: 175vh;
        }
        
        .unselectable {
          user-drag: none; 
          user-select: none;
          -moz-user-select: none;
          -webkit-user-drag: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }
        
        .hero-text {
          display: flex;
          align-items: center;
          z-index: 999;
          margin-top: 128px;
          margin-left: 96px;
          width: 50%;
          height: 60vh;
        }
        @media (min-width: 1281px) {
          .hero-text {
            margin-left: 15vw;
          }
        }
        @media (max-width: 1023px) {
          .hero-text {
            width: 100%;
          }
        }
        @media (max-width: 550px) {
          .hero-text {
            margin-left: 24px;
            margin-right: 24px;
            width: calc(100% - 48px);
            justify-content: center;
            align-items: flex-start;
          }
          .hero-text * {
            margin-top: 64px;
            font-size: 36px !important;
          }
          #logo-floating{
            right: -35vw;
            top: 96px;
            width: 120%;
            height: 145vh;
          }
        }
        
        .hero-text * {
          font-size: 48px;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: normal;
        }
        .hero-text span {
          color: #44d0c9;
          text-shadow: #189993 1px 0 10px;
        }
        `}</style>
      </div>
    );
  }
}

export default Header;
