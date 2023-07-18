import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Image from "react-bootstrap/Image";
function UserStuff() {
  //⚙
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      
      <div style={{flex: "0 1 20px", display: "flex", justifyContent: "center" }}
      >
        <ButtonGroup style={{ display: "flex", width: "100%" }}>
        <div style={{ flex: "1 0 auto", display: "flex", alignItems: "center", color:'white', paddingLeft:'7px' }}>
        <Image src="https://cdn-icons-png.flaticon.com/128/6723/6723246.png" roundedCircle style={{height:'30px',width:'30px', border:"solid", borderRadius:'50%', borderColor:'#707786'}} />
          <strong style={{paddingLeft:'7px'}}>name</strong>
      </div>
          <Button style={{  border: "none",borderRadius: "0px",borderColor:'#313338', fontSize: 25, flex: "1" ,backgroundColor: "#2b2d31"}}>
            ⚙
          </Button>
          <Button style={{ border: "none",borderRadius: "0px",borderColor:'#313338', fontSize: 25, flex: "1" ,backgroundColor: "#2b2d31" }}>
            👤
            </Button>
          <Button style={{ border: "none",borderRadius: "0px",borderColor:'#313338', fontSize: 25, flex: "1" ,backgroundColor: "#2b2d31"}}>
            ⏻
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );

}

export default UserStuff;