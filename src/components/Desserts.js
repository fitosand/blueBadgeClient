import React, { useState, useEffect }  from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import API_URL from "../env"

import dessertRedeem from '../assets/FreeDessert.jpg';



function DessertsApp(props) {

  const [redeemNum, setRedeemNum] = useState('1')
  const [displayImage, setDisplayImage] = useState(false) 
  
  function imageOn() {
    setDisplayImage(true)
  }

  function resetCount(){

    fetch(`${API_URL}/log/post`, {
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

  const sessionToken = localStorage.getItem("sessionToken")
  const userID = localStorage.getItem("userID")
  const UpdatedePoints = () => {

    fetch(`${API_URL}/log/update`, {
      method: 'PUT',
      body: JSON.stringify({"typeOfPoint": "desserts", "owner": userID}),
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

      fetch(`${API_URL}/log/update/reset`, {
        method: 'PUT',
        body: JSON.stringify({"typeOfPoint": "desserts", "numberOfPoints": 0, "owner": userID}),
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


        
        
      };
  
    

  return (
  <div className="Wrapper">
    <div className="InsideBox">
      <div className="Icon">
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? props.dePoints : 0;
            return (
              <CircularProgressbar value={(percentage/10)*100} text={`${percentage}/10`} />
            );
          }}
        </VisibilitySensor>
      </div>
      <div className="text">
        

        {props.dePoints !== 10 ? 

        <div>
            <ion-icon name="restaurant-outline"></ion-icon>
            <div>Desserts</div>
            <br></br>
            <button onClick={UpdatedePoints} className="CheckInButton">check in</button> 
        </div>:
        <div>
        <img src={dessertRedeem} alt="redeem coupon" style={{width: 100}}/> 
        <button onClick={imageOff} className="RedeemButton">Redeem ({redeemNum})</button>
        </div> 
        }

        {props.dePoints > 98 ?
          <img src={dessertRedeem} alt="redeem coupon" style={{width: 200}}/> : null


        }
  
      </div>
    </div>
  </div>
    );
}

export default DessertsApp;