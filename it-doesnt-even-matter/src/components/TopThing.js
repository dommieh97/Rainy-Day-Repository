import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function TopThing() 
{
  // const [dropClick, setDropClick] = useState(true); onClick={()=>setDropClick(!dropClick)} style={{border:"solid",zindex:-100, right: 9, top:15}}
    return (
      
    <DropdownButton id="dropdown-basic-button" title="Dropdown button" style={{width:'100%', alignItems:"center"}}>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </DropdownButton>
      );
};

export default TopThing;