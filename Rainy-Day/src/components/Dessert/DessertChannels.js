import Stack from 'react-bootstrap/Stack';
import React,{useState} from 'react';
function DessertChannels() {     
 const [channels, setChannels] = useState(true);

function handleChannels()
{
  setChannels(!channels);
}

return ( 

<div className="channels" style={{color:'#6e7373'}}>
    <Stack gap={5}>
    <div style={{width:'240px', position:"relative"}}>
      <strong id="smallchan">
        <small style={{paddingLeft:'5px',paddingRight:'5px',paddingTop:'5px',  transform: channels? 'rotate(90deg)': 'rotate(0deg)',display: 'inline-block',transition: 'transform 0.3s ease'}} onClick={handleChannels}> &gt; </small>
        CHANNELS</strong>
        <span style={{paddingLeft:'110px'}}>
          <span id="smallChanSpan">＋</span>
        </span>
      </div>
      <button style={{visibility: channels ? 'visible' : 'hidden',transition:"visibility 0s"
}} className="chanBttn"><strong><strong style={{fontSize:'16px',paddingRight:'7.5px'}}>#</strong> sweet-tooth</strong></button>
      <button style={{visibility: channels ? 'visible' : 'hidden',transition:"visibility 0s"
}} className="chanBttn"><strong><strong style={{fontSize:'16px',paddingRight:'7.5px'}}>#</strong>cake-dress-up</strong></button>
      <button style={{visibility: channels ? 'visible' : 'hidden',transition:"visibility 0s"
}} className="chanBttn"><strong><strong style={{fontSize:'16px',paddingRight:'7.5px'}}>#</strong>smol-cake</strong></button>
      <button style={{visibility: channels ? 'visible' : 'hidden',transition:"visibility 0s"
}} className="chanBttn"><strong><strong style={{fontSize:'16px',paddingRight:'7.5px'}}>#</strong>melty-yums</strong></button>
      <button style={{visibility: channels ? 'visible' : 'hidden',transition:"visibility 0s"
}} className="chanBttn"><strong><strong style={{fontSize:'16px',paddingRight:'7.5px'}}>#</strong>ma-macarons</strong></button>
      <button style={{visibility: channels ? 'visible' : 'hidden',transition:"visibility 0s"
}} className="chanBttn"><strong><strong style={{fontSize:'16px',paddingRight:'7.5px'}}>#</strong>sfw-pies-only</strong></button>

    </Stack>

    
</div>
  );
}


export default DessertChannels;

  // if (/${communities}) ${channel} => ${channel} 
