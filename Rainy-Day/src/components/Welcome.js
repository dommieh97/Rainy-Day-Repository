import React from "react";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
      <img
            style={{ height: "140px", width: "140px", marginLeft: "40px" }}
            src="cloudy.ico"
            alt="logo"
          />
        <h1 style={{ fontSize: "80px" }}>
          <strong>RAINY DAY</strong>
          
        </h1>
        <p>
          {" "}
          FIND YOUR RAY OF SUNSHINE
        </p>
        
      </div>
    </div>
  );
}

export default Welcome;