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
        {sessionToken ? <Navbar /> : null}
        <div className="Center">
          {sessionToken ? 
          
          <Switch>
            <Route path="/stats" > <Stats/> </Route>
            <Route path="/" exact > <Home/> </Route>
          </Switch> :

          <Auth updateToken={updateToken}/>}
        </div>
      </div>
    </Router>
  );
}


export default App;