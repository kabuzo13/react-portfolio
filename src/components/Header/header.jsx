import React from "react";
import "./style.css";

function Header() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-purple" style={{backgroundColor: "rgb(220, 155, 220)"}}>
  <a className="navbar-brand" href="#">Menu</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Me</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Project Gallery
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Workday Scheduler</a>
          <a className="dropdown-item" href="#">Quiz Application</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Bootstrap Portfolio</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</div>
    );
}

export default Header;