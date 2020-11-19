import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  // USER LOGOUT FUNCTION
  function userLogout(){
    localStorage.setItem('SessionToken', undefined)
    console.log('sessionToken ==> $(localStorage.sessionToken}')
    //tokenChecker() (if needed, it on page Token Checker Function-2 )
  }

  // TOKEN CHECKER

  console.log("hi");
  return (
    <div className="navbar">
      <div className="Top">
        <span className="logo">
          <Link to="/">logo</Link>
        </span>
        <Link to="/stats">Stats</Link>
        <button onClick={userLogout} className="Login"> logout </button>
      </div>
    </div>
  );
}

export default Navbar
