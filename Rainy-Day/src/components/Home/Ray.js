import React,{useEffect,useState} from 'react';
import RayBody from './RayBody';
function Ray ()
{
const [ray,setRay] = useState([])

useEffect(() => 
{
    fetch('http://localhost:4000/rays')
    .then(r => r.json())
    .then(setRay)
}, []); 

 return(<RayBody ray={ray}/>)
 
}

export default Ray