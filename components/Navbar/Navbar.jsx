import React from "react";
import Navigation from "../Navigation/Navigation";

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <img id="logotype" alt="logotype dacturne" src="/static/logotype.svg" />
        <Navigation />
        <style jsx>{`
        #navbar {
          margin-top: 16px;
          display: flex;
          /* background: red; */
          height: 64px;
        }
        
        #logotype {
          width: 140px;
          margin-left: 64px;
        }
        
        @media (max-width: 1023px) {
          #logotype {
            margin-left: 48px !important;
          }
        }
        
        @media (max-width: 550px) {
          #logotype {
            margin-left: 32px !important;
          }
          #navbar {
            height: 48px;
          }
        }
        `}</style>
      </div>
    );
  }
}

export default Navbar;