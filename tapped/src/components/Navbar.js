import React from "react";
import { Link } from "react-router-dom";


function Navbar(props) {

  

  // USER LOGOUT FUNCTION

  const clearToken = () => {
    localStorage.clear();
   
    console.log('sessionToken ==> $(localStorage.sessionToken}');
    window.location.href = '/';
  }

  return (
    <div className="navbar">
      <div className="Top">
        <span className="logo">
          <Link to="/">Tapped</Link>
        </span>
        <Link to='/stats'>Update Email</Link>
        <button onClick={clearToken} className="Login"> logout </button>
      </div>
    </div>
  );
}

export default Navbar
