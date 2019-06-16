import React from "react";

class Navigation extends React.Component {
  state = {
    open: false
  }

  toggle() {
    this.setState({open: !this.state.open});
  }
  render() {
    return (
      <div
        style={{
          marginLeft: 'auto',
          zIndex: 999,
          position: "relative",
          // background: 'red'
        }}
      >

        <div className="nav-toggle" href="#" onClick={this.toggle.bind(this)}><span>&#9776;</span></div>
        <div className="large-menu">
          <ul>
            <li>about</li>
            <li>portfolio</li>
            <li>labs</li>
            <li>contact</li>
          </ul>
        </div>
        
        
          <div className={`drawer ${this.state.open ? 'open' : 'closed'}`} >
            <div className="small-menu">
              <ul>
                <div className="nav-toggle right" href="#" onClick={this.toggle.bind(this)}><span>&#10005;</span></div>
                <li>about</li>
                <li>portfolio</li>
                <li>labs</li>
                <li>contact</li>
            </ul>
            </div>
          </div>
        
        <style jsx>{`
        /* menus */
        .large-menu {
        }
        .large-menu ul {
          list-style-type: none;
          margin: 0;
          height: 64px;
          /* background: red; */
          display: flex;
          justify-content: center;
          align-content: center;
          align-items: center;
        }
        .large-menu ul li:first-of-type {
          margin-left: auto;
        }
        .large-menu ul li {
          font-size: 19px;
          margin: 0 24px;
        }
        .large-menu ul li:last-of-type {
          margin-right: 64px;
        }
        
        .small-menu {
          /* background: blue; */
          margin-right: 16px;
        }
        
        .small-menu ul {
          background: #24314b;
          box-shadow: -16px 0px 14px 10px #00000073;
          list-style-type: none;
          position: fixed;
          right: 0;
          bottom: 0;
          /* top: 0; */
          width: 65vw;
          height: calc(100vh);
          margin: 0;
          padding: 0;
        }
        
        .small-menu ul li:first-of-type {
          margin-top: 16px;
        }
        .small-menu ul li {
          background: #ffffff05;
          font-size: 18px;
          width: 100%;
          height: 48px;
          margin: 16px 0;
          padding-left: 32px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        
        .drawer.closed {
          visibility: hidden;
        }
        
        .drawer.open {
          position: fixed;
          width: 70vw;
          height: 100vh;
          right: 0;
          top: 0;
        }
        
        .nav-toggle {
          height: 64px;
          width: 64px;
          margin-right: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          display: none;
        }

        .nav-toggle.right {
          margin-top: 16px;
          margin-left: auto;
        }
        
        .nav-toggle span {
          font-size: 24px;
        }
        
        @media (max-width: 1023px) {
          .large-menu {
            display: none;
          }
          .nav-toggle {
            display: flex;
          }
        }
        @media (max-width: 550px) {
          .nav-toggle {
            height: 48px;
            width: 48px;
          }
        }
        `}</style>
      </div>
    );
  }
}

export default Navigation;