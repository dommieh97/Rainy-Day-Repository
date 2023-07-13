import React from'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function UserStuff()
{
    //⚙ 
    return(
        <div>
            <div style={{height:"60%", border:"solid"}}>PFP and name!!</div>

            <div style={{height:"40%"}}>
            <>
      <ButtonGroup size="sm">
        <Button>⚙ </Button>
        <Button>👤
            <img style={{height:"40px", width:"40px"}}src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"/>
        </Button>
        <Button>⏻</Button>
      </ButtonGroup>
    </>
            </div>
        </div>
          );
};


export default UserStuff