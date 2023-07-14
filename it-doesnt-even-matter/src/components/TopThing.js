import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function TopThing() 
{
    return (
  
  <DropdownButton id="dropdown-basic-button" title="Channel-Title" variant='success'>
  <Dropdown.Item  href="#/action-1">Action </Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item >
    <Dropdown.Item  href="#/action-3">Something else</Dropdown.Item>
  </DropdownButton>
      );
};

export default TopThing;