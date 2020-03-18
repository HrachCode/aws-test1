import React from "react";
import './SimpleModalStyles.css';

export default function SimpleModal(props) {
  const { onCloseRequest, children } = props;
  return (
    <div className="modalOverlay">
      <div className="modalOverlayFront">
        <div className="menu" >
          <div >{children}</div>
        </div>
        <img src={require("./images/x.png")} className="closeButton" onClick={onCloseRequest}/>
      </div>
    </div>
  ); 
}

