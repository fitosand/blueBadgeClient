import React from "react";

const LoginPage = () => (
  <div className="LoginWrapper">
    <div className="LoginInputBoxes">
      <h2>Tapped</h2>
      <br></br>
      <p>Login/SignUp</p>
      <br></br>
      <form>
        <label>
          Email:
          <input className="InputText" type="text" name="name" />
        </label>
        <br></br>
        <label>
          Password:
          <input className="InputText" type="text" name="name" />
        </label>
        <div className="SubmitButtons">
          <input className="loginButton" type="submit" value="Login" />
          <input className="regButton" type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>
);

export default LoginPage;
