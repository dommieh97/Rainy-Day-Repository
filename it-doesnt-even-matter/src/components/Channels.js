import Stack from 'react-bootstrap/Stack';

function Channels() {          
return ( 

<div className="channels" stlye={{color:'#6e7373'}}>
    <Stack gap={5}>
    <small id="smallchan"> 📺 Channels<small id="plus"> ＋ </small></small>
      <button className="chanBttn"><div className="chanDiv"> ＃good-puppers</div></button>
      <button className="chanBttn"><div className="chanDiv"> ＃german-shepherds</div></button>
      <button className="chanBttn"><div className="chanDiv"> ＃corgis</div></button>
      <button className="chanBttn"><div className="chanDiv"> ＃weeeeenies</div></button>
      <button className="chanBttn"><div className="chanDiv"> ＃alaskan-huskers</div></button>
      <button className="chanBttn"><div className="chanDiv"> ＃golden-retriever</div></button>

    </Stack>

    
</div>
  );
}


export default Channels;

  // if (/${communities}) ${channel} => ${channel} 
