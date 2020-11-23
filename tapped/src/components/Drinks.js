import React, {useState} from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";
import drinkRedeem from '../assets/FreeBeer.jpg';


function DrinksApp(props){

  const [displayImage, setDisplayImage] = useState(false) 
  
  function imageOn() {
    setDisplayImage(true)
  }

  function imageOff() {
    setDisplayImage(false)
  }


  const UpdateDrPoints = () => {
    const sessionToken = localStorage.getItem("sessionToken")
    console.log("did");
    fetch("http://localhost:3000/log/update", {
      method: 'PUT',
      body: JSON.stringify({"typeOfPoint": "drinks"}),
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



  return(
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
      <div>
        <ion-icon name="beer-outline"></ion-icon>
        <div>Drinks</div>
        <br></br>
        {props.drPoints > 9 ? 
        <button onClick={imageOn} className="RedeemButton">Redeem</button>:
        <button onClick={UpdateDrPoints} className="CheckInButton">check in</button>
        }

        {displayImage ? <img src={drinkRedeem} alt="redeem coupon" style={{width: 200}}/> : < > </>}

      </div>
    </div>
  </div>
    );
};

export default DrinksApp;
