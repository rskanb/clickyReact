import React from "react";
import "../styles/Navbar.css";

function Navbar(props) {
  return (
    <div className="navbar navbar-expand-lg fixed-top">
    {/* <a className="brand nav-link" href="/">Clicky Game</a> */}
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li><a className="brand nav-link" href="/">Clicky Game</a></li>
        <li className="brand nav-item navinfo"><p>Click an image to begin!</p></li>
        <li className="brand nav-item navscore"><p>Score: {props.score ? props.score : 0} | Top Score: {props.highscore ? props.highscore : 0}</p></li>
      </ul>
  </div>
    </div>
  );
}

export default Navbar;
