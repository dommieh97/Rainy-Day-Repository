import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function TopThing() 
{
  return (
    <Dropdown style={{border:'solid',width:'240px',borderColor:'#1e1f22', borderWidth:'.3px'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"100%", backgroundColor:'#2b2d31', border:'none'}}> 
        Doggos      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TopThing;