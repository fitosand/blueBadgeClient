import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const MealsApp = (props) => (
  <div className="Wrapper">
    <div className="InsideBox">
      <div className="Icon">
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? props.mPoints : 0;
            return (
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            );
          }}
        </VisibilitySensor>
      </div>
      <div className="text">
        <ion-icon name="restaurant-outline"></ion-icon>
        <div>Meals</div>
        <br></br>
        <button className="CheckInButton">check in</button>
      </div>
    </div>
  </div>
);

export default MealsApp;
