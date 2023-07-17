import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useLocation, useState } from "react-router-dom";

function TopThing() {
  const location = useLocation().pathname;
  
  let communityName = "";
  function findName(pathName) {
    switch (pathName) {
      case "/Dog":
        communityName = "aaaa";
        break;
      case "/Cat":
        communityName = "asd";
        break;
      case "/Boba":
        communityName = "ddd";
        break;
      case "/Food":
        communityName = "aaa";
        break;
      case "/Dessert":
        communityName = "";
        break;
      case "/Beach":
        communityName = "";
        break;
      case "/Nature":
        communityName = "";
        break;
      case "/Flower":
        communityName = "";
        break;
      case "/Video-Games":
        communityName = "";
        break;
      default:
        return null;
    }
  }
  findName(location);

  return (
    <Dropdown
      style={{
        border: "solid",
        width: "240px",
        borderColor: "#1e1f22",
        borderWidth: ".3px",
      }}
    >
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{ width: "100%", backgroundColor: "#2b2d31", border: "none" }}
      >
        {communityName}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default TopThing;
