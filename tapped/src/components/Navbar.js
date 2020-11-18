import React from "react";
import { Link } from "react-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="Top">
        <span className="logo">
          <Link to="/">logo</Link>
        </span>
        <Link to="/stats">Stats</Link>
        <span className="Login"> logout </span>
      </div>
    </div>
  );
}

export default Navbar
