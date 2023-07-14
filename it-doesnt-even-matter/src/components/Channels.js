import Stack from 'react-bootstrap/Stack';

function Channels() {          
return ( <div className="channels">
  
    <Stack gap={5}>
    <small id="smallchan"> 📺 Text Channels<small id="plus"> ＋ </small></small>
      <button className="chanBttn"><div className="chanDiv"> ＃ Funny Memes</div></button>
      <button className="chanBttn"><div className="chanDiv"> ＃ Cool Resturants</div></button>
      <button className="chanBttn"><div className="chanDiv"> ＃ Meetup Spots</div></button>
    </Stack>

    
    </div>
  );
}


export default Channels;