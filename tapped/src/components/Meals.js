import React, { useState, useEffect }  from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

import mealRedeem from '../assets/FreeApp.jpg';



function MealsApp(props) {

  const [redeemNum, setRedeemNum] = useState(0)
  const [displayImage, setDisplayImage] = useState(false) 
  
  function imageOn() {
    setDisplayImage(true)
  }

  function imageOff() {
    setDisplayImage(false)
    UpdateMPoints();
  }

  const sessionToken = localStorage.getItem("sessionToken")
  const UpdateMPoints = () => {

    fetch("http://localhost:3000/log/update", {
      method: 'PUT',
      body: JSON.stringify({"typeOfPoint": "meals"}),
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
      
    };

    const resetPoints = () => {

      fetch("http://localhost:3000/log/post", {
        method: 'POST',
        body: JSON.stringify({"typeOfPoint": "meals", "numberOfPoints": 0}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': sessionToken
            
        }
        }).then(
          (response2) => response2.json()
        
        ).then((data2) => {
            console.log(props.mPoints);
            //window.location.reload(true);
         
        }).catch((error) => {
          return "error"; // note 2
        });

        UpdateMPoints();
        
        
      };
  
    

  return (
  <div className="Wrapper">
    <div className="InsideBox">
      <div className="Icon">
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? props.mPoints : 0;
            return (
              <CircularProgressbar value={(percentage/100)*100} text={`${percentage}/100`} />
            );
          }}
        </VisibilitySensor>
      </div>
      <div className="text">
        <ion-icon name="restaurant-outline"></ion-icon>
        <div>Meals</div>
        <br></br>
        {props.mPoints %10 == 0 ? 
        <div>
        <img src={mealRedeem} alt="redeem coupon" style={{width: 200}}/> 
        {/* <span>{setRedeemNum(1)}</span> */}
        <button onClick={imageOff} className="RedeemButton">Redeem ({redeemNum})</button>

        </div> :
        <button onClick={UpdateMPoints} className="CheckInButton">check in</button>
        }
        {props.mPoints > 98 ?
          <img src={mealRedeem} alt="redeem coupon" style={{width: 200}}/> : null


        }
        {/* {displayImage ? <img src={mealRedeem} alt="redeem coupon" style={{width: 200}}/> : < > </>} */}
      </div>
    </div>
  </div>
    );
}

export default MealsApp;
