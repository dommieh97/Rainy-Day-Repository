import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Cards({dog})
{
    const {title, author, url} = dog;

    return (
        <Card style={{width: '80%', height:"100%" ,  border:'none', color:"white", borderRadius:"15%"}}>
           <Card.Img variant='top' className="card-img" src={url} style={{ height:'33%', width:'100%', justifySelf:'stretch',borderRadius:"15%"}} alt="dog pic"/>
         </Card>
    );
  }

        //
          
export default Cards;