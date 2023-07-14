import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Cards({dog})
{
    const {title, author, url} = dog;

    return (
       <Card style={{width: '18%', height:"33%" ,padding:"10px", border:'solid', color:"white"}}>
           <Card.Img variant='top' className="card-img" src={url} style={{ height:'20%', width:'100%', justifySelf:'stretch'}} alt="dog pic"/>
             <Card.Body>
               <Card.Text>
                postedBy: {author}
             </Card.Text>  
        {/* //       <Card.Title>{title}</Card.Title> */}

             </Card.Body> 
        {/* //      <Button variant="primary">Go somewhere</Button> */}

         </Card>
    );
  }

        //
          
export default Cards;