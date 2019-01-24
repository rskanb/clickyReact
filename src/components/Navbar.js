import React from "react";
import "../styles/Navbar.css";

function Navbar(props) {
  return (
    <div className="navbar navbar-expand-lg fixed-top">
      <ul className="navbar-nav mr-auto">
        <li className="brand nav-item"><a className="nav-link" href="/">Clicky Game</a></li>
        <li className="nav-item navinfo"><p>Click an image to begin!</p></li>
        <li className="nav-item navscore"><p>Score: {props.score ? props.score : 0} | Top Score: {props.highscore ? props.highscore : 0}</p></li>
      </ul>
    </div>
  );
}

export default Navbar;
