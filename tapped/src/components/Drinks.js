import React, { useState, useEffect }  from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

import drinkRedeem from '../assets/FreeBeer.jpg';



function DrinksApp(props) {

  const [redeemNum, setRedeemNum] = useState(1)
  const [displayImage, setDisplayImage] = useState(false) 
  
  function imageOn() {
    setDisplayImage(true)
  }

  function resetCount(){

    fetch("http://localhost:3000/log/post", {
      method: 'POST',
      body: JSON.stringify({"typeOfPoint": "meals", "numberOfPoints": 0 }),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionToken
          
          
      }
      
    })

    window.location.reload();

  }

  function imageOff() {
    resetPoints();
    setDisplayImage(false)


  }

  const userID = localStorage.getItem("userID")

  const sessionToken = localStorage.getItem("sessionToken")
  
  const UpdatedrPoints = () => {

    fetch("http://localhost:3000/log/update", {
      method: 'PUT',
      body: JSON.stringify({"typeOfPoint": "drinks", "owner": userID}),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionToken
          
      }
      }).then(
        (response) => response.json()
      
      ).then((data) => {
          console.log(data);
          window.location.reload();
      }).catch((error) => {
        return "error"; // note 2
      });
      props.fetchItems()
    };

    const resetPoints = () => {

      fetch("http://localhost:3000/update/reset", {
        method: 'PUT',
        body: JSON.stringify({"typeOfPoint": "drinks", "numberOfPoints": 0, "owner": userID}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': sessionToken
            
        }
        }).then(
          (response2) => response2.json()
        
        ).then((data2) => {
            console.log(props.dePoints);
            window.location.reload(true);
         
        }).catch((error) => {
          return "error"; // note 2
        });

        //UpdateMPoints();
        
        
      };
  
    

  return (
  <div className="Wrapper">
    <div className="InsideBox">
      <div className="Icon">
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? props.drPoints : 0;
            return (
              <CircularProgressbar value={(percentage/10)*100} text={`${percentage}/10`} />
            );
          }}
        </VisibilitySensor>
      </div>
      <div className="text">
        

        {props.drPoints !== 10 ? 
        <div>
        <ion-icon name="restaurant-outline"></ion-icon>
        <div>Drinks</div>
        <br></br>

        <button onClick={UpdatedrPoints} className="CheckInButton">check in</button> 
        </div>:
        <div>
        <img src={drinkRedeem} alt="redeem coupon" style={{width: 100}}/> 
        <button onClick={imageOff} className="RedeemButton">Redeem ({redeemNum})</button>
        </div> 
        }

        {props.drPoints > 98 ?
          <img src={drinkRedeem} alt="redeem coupon" style={{width: 200}}/> : null


        }

      </div>
    </div>
  </div>
    );
}

export default DrinksApp;
