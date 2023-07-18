import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation } from "react-router-dom";

function TopThing() {
  const location = useLocation().pathname;

  let communityName = "";
  function findName(pathName) {
    switch (pathName) {
      case "/Dog":
        communityName = "Good Doggos";
        break;
      case "/Cat":
        communityName = "Good Kittos";
        break;
      case "/Boba":
        communityName = "Boba Time";
        break;
      case "/Food":
        communityName = "nom noms";
        break;
      case "/Dessert":
        communityName = "sweet noms";
        break;
      case "/Beach":
        communityName = "lazy daze";
        break;
      case "/Nature":
        communityName = "ewww nature";
        break;
      case "/Flower":
        communityName = "stop and sniff";
        break;
      case "/Video-Games":
        communityName = "gamin station";
        break;
      case "/":
        communityName = "Rays of Sunshine";
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