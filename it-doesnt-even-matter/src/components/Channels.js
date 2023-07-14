import Stack from 'react-bootstrap/Stack';

function Channels() {          
return ( <div className="channels">
    <Stack gap={5}>
    <small id="smallchan"> 📺 Text Channels<small id="plus"> ＋ </small></small>
      <button className="chanBttn"><div className="chanDiv"> ＃ Good Puppers</div></button>
      <button className="chanBttn"><div className="chanDiv"> ＃ German Shepherds</div></button>
      <button className="chanBttn"><div className="chanDiv"> ＃ Corgis</div></button>
    </Stack>

    
    </div>
  );
}


export default Channels;

  // if (/${communities}) ${channel} => ${channel} 
