import React, { useState }  from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import Update from "../auth/UpdateUser";
import mealRedeem from '../assets/FreeApp.jpg';



//this.setState({ count: this.state.count + 1 })


function MealsApp(props) {


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
    setDisplayImage(false);
    alert("congratulations! check your email for further instructions!")
    resetCount();
  }

  const userID = localStorage.getItem("userID")

  const sessionToken = localStorage.getItem("sessionToken")
  const UpdateMPoints = () => {
  
  
    fetch("http://localhost:3000/log/update", {
      method: 'PUT',
      body: JSON.stringify({"typeOfPoint": "meals", "owner": userID }),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionToken
          
          
      }
      }).then(
        (response) => response.json()
      
      ).then((data) => {
        console.log(sessionToken);
          console.log(data);
          window.location.reload();
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
            const percentage = isVisible ? props.mPoints : 0;
            return (
              <CircularProgressbar value={(percentage/10)*100} text={`${percentage}/10`} />
            );
          }}
        </VisibilitySensor>
      </div>
      <div className="text">
        <ion-icon name="restaurant-outline"></ion-icon>
        <div>Meals</div>
        <br></br>
        {props.mPoints %10 == 0 ? 
        <button onClick={imageOff} className="RedeemButton">Redeem</button>:
        <button onClick={UpdateMPoints} className="CheckInButton">check in</button>
        }
        {displayImage ? <img src={mealRedeem} alt="redeem coupon" style={{width: 200}}/> : < > </>}
      </div>
    </div>
  </div>
    );
}

export default MealsApp;
