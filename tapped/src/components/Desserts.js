import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const DessertsApp = (props) => (
  <div className="Wrapper">
    <div className="InsideBox">
      <div className="Icon">
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? props.dePoints : 0;
            return (
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            );
          }}
        </VisibilitySensor>
      </div>
      <div>
        <ion-icon name="ice-cream-outline"></ion-icon>
        <div>Desserts</div>
        <br></br>
        <button className="CheckInButton">check in</button>
      </div>
    </div>
  </div>
);

export default DessertsApp;
