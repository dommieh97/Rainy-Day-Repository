import React,{useContext, useEffect,useState} from 'react';
import RayBody from './RayBody';
import MyContext from '../MyContext';

function Ray ()
{
    const {setRay, ray} = useContext(MyContext);

useEffect(() => 
{
    fetch('http://localhost:4000/rays')
    .then(r => r.json())
    .then(setRay)
}, []); 

 return(<RayBody ray={ray}/>)
 
}

export default Ray