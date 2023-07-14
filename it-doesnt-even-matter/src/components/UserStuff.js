import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function UserStuff() {
  //⚙
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: "1 0 auto", display: "flex", alignItems: "center" }}>
        PFP and name!!
      </div>
      <div style={{flex: "0 1 20px", display: "flex", justifyContent: "center" }}
      >
        <ButtonGroup style={{ display: "flex", width: "100%" }}>
          <Button style={{  border: "solid",borderRadius: "0px",borderColor:'#313338', fontSize: 25, flex: "1" ,backgroundColor: "#2b2d31"}}>
            ⚙
          </Button>
          <Button style={{ border: "solid",borderRadius: "0px",borderColor:'#313338', fontSize: 25, flex: "1" ,backgroundColor: "#2b2d31" }}>
            👤
            </Button>
          <Button style={{ border: "solid",borderRadius: "0px",borderColor:'#313338', fontSize: 25, flex: "1" ,backgroundColor: "#2b2d31"}}>
            ⏻
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );

}

export default UserStuff;