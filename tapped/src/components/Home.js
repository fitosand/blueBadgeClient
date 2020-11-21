import React, { useState, useEffect } from "react";
import "../App.css";
import Desserts from "./Desserts";
import Meals from "./Meals";
import Drinks from "./Drinks";

function Home() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [mPoints, setMPoints] = useState([]);
  const [drPoints, setdrPoints] = useState([]);
  const [dePoints, setdePoints] = useState([]);

  const fetchItems = async () => {
    
    //need to specify user (stats/:id) -> passed as prop from Nav?
    fetch("http://localhost:3000/log/stats/2", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            (response) => response.json()
        ).then((data) => {
            // props.updateToken(data.sessionToken)
                         
              //***** MEAL POINTS **** //
              setMPoints(data[0].numberOfPoints);
                      
              // ***** DRINKS POINTS **** //
              setdrPoints(data[1].numberOfPoints); 
              
              //***** DESSERT POINTS **** //
              setdePoints(data[2].numberOfPoints);// 
          
        })
    
  };

  return (
    <div className="Center">
      <Meals mPoints={mPoints} />
      <Drinks drPoints={drPoints} />
      <Desserts dePoints={dePoints} />
    </div>
  );
}

export default Home;
