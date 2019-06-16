import React from "react";

// registerListeners();
function FloatingShapes() {
  return (<>
    <div className="object-wrapper speed-3">
      <img id="triangle" alt="triangle" src="/static/triangle.svg" />
      <img id="cross" alt="cross" src="/static/cross.svg" />
      <img id="corner-splash" alt="splash" src="/static/corner_splash.svg" />
    </div>
    <div className="object-wrapper speed-1">
      <img id="square" alt="square" src="/static/rounded_square.svg" />
      <img id="circle" alt="circle" src="/static/circle.svg" />
    </div>
    <div className="object-wrapper speed-2">
      <img id="shaky-line" alt="line" src="/static/shaky_path.svg" />
    </div>
    <style jsx>{`
    #square {
      position: absolute;
      width: 55px;
      transform: rotate(30deg);
      left: 15%;
      top: 80vh;
    }
    #triangle {
      position: absolute;
      width: 50px;
      transform: rotate(-30deg);
      left: 5%;
      top: 15vh;
    }
    #circle {
      position: absolute;
      width: 65px;
      left: -25px;
      top: 70vh;
    }
    #cross {
      position: absolute;
      width: 60px;
      transform: rotate(30deg);
      left: 40%;
      top: 25vh;
    }
    #shaky-line {
      position: absolute;
      width: 68px;
      left: 35%;
      top: 60vh;
    }
    #corner-splash {
      position: absolute;
      left: -5px;
      top: 0;
      width: 35vw;
      height: 50vh;
      object-fit: contain;
      object-position: top left;
    }
    
    @media (max-width: 1023px) {
      #cross {
        left: auto;
        top: 15vh;
        right: 10%;
      }
      #shaky-line {
        left: auto;
        right: 25%;
        top: 40vh;
      }
      #circle {
        top: 50vh;
      }
      #square {
        left: 12%;
      }
      #corner-splash {
        width: auto;
        max-width: 70vw;
        height: 50vh;
      }
    }
    
    @media (max-width: 550px) {
      #shaky-line {
        top: 45%;
      }
    }
    `}</style>
  </>)
}

function registerListeners() {

  // ---------
  function parallaxSquare() {
    var s = document.getElementById("square");
    var yPos = 0 - window.pageYOffset / 90; 
    s.style.top = `calc(${80}vh + ${yPos}%)`;
  }
  window.addEventListener("scroll", parallaxSquare);
  // ---------
  function parallaxCross() {
    var s = document.getElementById("cross");
    var yPos = 0 - window.pageYOffset / 20;
    s.style.top = `calc(${25}vh + ${yPos}%)`;
  }
  window.addEventListener("scroll", parallaxCross)
  // ---------
  function parallaxShaky() {
    var s = document.getElementById("shaky-line");
    var yPos = 0 - window.pageYOffset / 90;
    s.style.top = `calc(${60}vh - ${yPos}%)`;
  }
  window.addEventListener("scroll", parallaxShaky)
}

export default FloatingShapes;