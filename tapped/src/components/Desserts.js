import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

function DessertsApp(props) {

  const UpdateDePoints = () => {

    fetch("http://localhost:3000/log/update", {
      method: 'PUT',
      body: JSON.stringify({"typeOfPoint": "desserts"}),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA1MDE5MTI5LCJleHAiOjE2MzY1NTUxMjl9.2GU9iieKsuqA4hrAcXTfptwDm5fEQ1R3thgkDZrVThc'
          
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
            const percentage = isVisible ? props.dePoints : 0;
            return (
              <CircularProgressbar value={(percentage/10)*100} text={`${percentage}/10`} />
            );
          }}
        </VisibilitySensor>
      </div>
      <div>
        
        <div>Desserts</div>
        <br></br>
        {props.dePoints > 9 ?  
        <button className="RedeemButton">Redeem</button>:
        <button onClick={UpdateDePoints} className="CheckInButton">check in</button>
        }  
      </div>
    </div>
  </div>
    );
};

export default DessertsApp;
