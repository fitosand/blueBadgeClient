import React from "react";
// import { Link } from "react-dom";
import Update from '../auth/UpdateUser'

export default function Navbar(props) {
  return (
    <div>
      <Update sessionToken = {props.sessionToken} />
    </div>
  );
}
