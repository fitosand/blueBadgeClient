import React, { useState, useEffect } from "react";
import "../App.css";
import Desserts from "./Desserts";
import Meals from "./Meals";
import Drinks from "./Drinks";
import Login from "../auth/Login";



function Home() {
  const userID = localStorage.getItem("userID")
  useEffect(() => {
    fetchItems();
  }, []);

  const [mPoints, setMPoints] = useState([]);
  const [drPoints, setdrPoints] = useState([]);
  const [dePoints, setdePoints] = useState([]);

  const fetchItems = () => {
    
    //need to specify user (stats/:id) -> passed as prop from Nav?
    fetch(`http://localhost:3000/log/stats/${userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            (response) => response.json()
        ).then((data) => {
            // props.updateToken(data.sessionToken)
              console.log("home data:", data)   
              
              
              //***** MEAL POINTS **** //
              if (data[0]?.typeOfPoint === "meals"){

              setMPoints(data[0]?.numberOfPoints);
              

              } else if (data[0]?.typeOfPoint === "drinks") {
                      
              // ***** DRINKS POINTS **** //
              setdrPoints(data[0]?.numberOfPoints); 

              } else {
              
              //***** DESSERT POINTS **** //
              setdePoints(data[0]?.numberOfPoints);//
              } 


              if (data[1]?.typeOfPoint === "meals"){

                setMPoints(data[1]?.numberOfPoints);
                console.log("this is 2:", data[1]?.numberOfPoints);
  
                } else if (data[1]?.typeOfPoint === "drinks") {
                        
                // ***** DRINKS POINTS **** //
                setdrPoints(data[1]?.numberOfPoints); 
  
                } else {
                
                //***** DESSERT POINTS **** //
                setdePoints(data[1]?.numberOfPoints);//
                } 


                if (data[2]?.typeOfPoint === "meals"){

                  setMPoints(data[2]?.numberOfPoints);
                  console.log("this is 3:", data[1]?.numberOfPoints);
    
                  } else if (data[2]?.typeOfPoint === "drinks") {
                          
                  // ***** DRINKS POINTS **** //
                  setdrPoints(data[2]?.numberOfPoints); 
    
                  } else {
                  
                  //***** DESSERT POINTS **** //
                  setdePoints(data[2]?.numberOfPoints);//
                  } 
              
             
          
        })
    
  };

  return (
    <div className="Center">
      <Meals mPoints={mPoints} fetchItems={fetchItems}/>
      <Drinks drPoints={drPoints} fetchItems={fetchItems} />
      <Desserts dePoints={dePoints} fetchItems={fetchItems} />
    </div>
  );
}

export default Home;
