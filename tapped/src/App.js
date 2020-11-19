import React, {useState, useEffect} from 'react';
import './App.css';
import Auth from './auth/Auth';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Stats from "./components/Stats";
import Home from "./components/Home";
import Login from "./components/Login";



function App() {
  const [sessionToken, setSessionToken] = useState('');


  const isLoggedIn = false;

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <Router>
      <div className="App">
        {/* show navbar if logged in */}
        {isLoggedIn ? <Navbar /> : null}
        <div className="Center">
          <Switch>
            <Route path="/stats" component={Stats} />
            <Route path="/" exact component={isLoggedIn ? Home : Auth} />
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;



