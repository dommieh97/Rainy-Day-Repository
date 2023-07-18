import Stack from 'react-bootstrap/Stack';
import React,{useState} from 'react';
function CatChannels() {     
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
}} className="chanBttn"><strong><strong style={{fontSize:'16px',paddingRight:'7.5px'}}>#</strong> good-kitties</strong></button>
      <button style={{visibility: channels ? 'visible' : 'hidden',transition:"visibility 0s"
}} className="chanBttn"><strong><strong style={{fontSize:'16px',paddingRight:'7.5px'}}>#</strong>shorthairs</strong></button>
      <button style={{visibility: channels ? 'visible' : 'hidden',transition:"visibility 0s"
}} className="chanBttn"><strong><strong style={{fontSize:'16px',paddingRight:'7.5px'}}>#</strong>persians</strong></button>
      <button style={{visibility: channels ? 'visible' : 'hidden',transition:"visibility 0s"
}} className="chanBttn"><strong><strong style={{fontSize:'16px',paddingRight:'7.5px'}}>#</strong>baldies</strong></button>
      <button style={{visibility: channels ? 'visible' : 'hidden',transition:"visibility 0s"
}} className="chanBttn"><strong><strong style={{fontSize:'16px',paddingRight:'7.5px'}}>#</strong>siameses</strong></button>
      <button style={{visibility: channels ? 'visible' : 'hidden',transition:"visibility 0s"
}} className="chanBttn"><strong><strong style={{fontSize:'16px',paddingRight:'7.5px'}}>#</strong>scottish-fold</strong></button>

    </Stack>

    
</div>
  );
}


export default CatChannels;

  // if (/${communities}) ${channel} => ${channel} 
