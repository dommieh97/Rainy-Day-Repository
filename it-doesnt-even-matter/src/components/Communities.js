import React from 'react';
import Stack from 'react-bootstrap/Stack';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';

function Communities() 
{
    return (
        <>
        <div>
         <Stack gap={20} className="col-md-5 mx-auto"> 
            <div className="p-2" >

                <br/>

                <ButtonGroup size="sm">
                <Col xs={6} md={4} >
                     <Image alt='myHub' src="https://cdn-icons-png.flaticon.com/128/6723/6723246.png" roundedCircle style={{height:'3.5vh',width:'3.5vw', border:"solid", borderRadius:'50%', borderColor:'#707786'}} />
                </Col>
                </ButtonGroup>
            </div>

            <br/>
            <Dropdown.Divider style={{width:'9vh', color:"#707786"}}/>
            <br/>

            <div className="p-2" >
                <ButtonGroup size="sm">
                <Col xs={6} md={4} >
                     <Image alt="dogs"src="https://cdn-icons-png.flaticon.com/128/7298/7298818.png" roundedCircle style={{height:'3.5vh',width:'3.5vw', border:"solid", borderRadius:'50%', borderColor:'#707786'}} />
                </Col>
                </ButtonGroup>
            </div>

            <br/>
            <br/>

            <div className="p-2" >
                <ButtonGroup size="sm">
                <Col xs={6} md={4} >
                     <Image alt="cats"src="https://cdn-icons-png.flaticon.com/128/1864/1864514.png" roundedCircle style={{height:'3.5vh',width:'3.5vw', border:"solid", borderRadius:'50%', borderColor:'#707786'}} />
                </Col>
                </ButtonGroup>
            </div>

            <br/>
            <br/>   

            <div className="p-2" >
                <ButtonGroup size="sm">
                <Col xs={6} md={4} >
                     <Image alt="boba" src="https://cdn-icons-png.flaticon.com/128/3081/3081162.png" roundedCircle style={{height:'3.5vh',width:'3.5vw', border:"solid", borderRadius:'50%', borderColor:'#707786'}} />
                </Col>
                </ButtonGroup>
            </div>

            <br/> 
            <br/>  

            <div className="p-2" >
                <ButtonGroup size="sm">
                <Col xs={6} md={4} >
                     <Image alt="food" src="https://cdn-icons-png.flaticon.com/128/1623/1623786.png" roundedCircle style={{height:'3.5vh',width:'3.5vw', border:"solid", borderRadius:'50%', borderColor:'#707786' }} />
                </Col>
                </ButtonGroup>
            
            </div>

            <br/>                    
            <br/>

            <div className="p-2" >
                <ButtonGroup size="sm">
                <Col xs={6} md={4} >
                     <Image alt="sweets" src="https://cdn-icons-png.flaticon.com/128/9997/9997743.png" roundedCircle style={{height:'3.5vh',width:'3.5vw', border:"solid", borderRadius:'50%', borderColor:'#707786' }} />
                </Col>
                </ButtonGroup>
            
            </div>

            <br/>                    
            <br/>

            <div className="p-2" >
                <ButtonGroup size="sm">
                <Col xs={6} md={4} >
                     <Image alt="beach" src="https://cdn-icons-png.flaticon.com/128/3722/3722618.png" roundedCircle style={{height:'3.5vh',width:'3.5vw', border:"solid", borderRadius:'50%', borderColor:'#707786'}} />
                </Col>
                </ButtonGroup>
            </div>
            
            <br/>                    
            <br/>                    
            
            <div className="p-2" >
                <ButtonGroup size="sm">
                <Col xs={6} md={4} >
                     <Image alt="nature" src="https://cdn-icons-png.flaticon.com/128/3038/3038873.png" roundedCircle style={{height:'3.5vh',width:'3.5vw', border:"solid", borderRadius:'50%', borderColor:'#707786'}} />
                </Col>
                </ButtonGroup>
            </div>
           
            <br/>                    
            <br/>  

            <div className="p-2" >
                <ButtonGroup size="sm">
                <Col xs={6} md={4} >
                     <Image alt="videoGames" src="https://cdn-icons-png.flaticon.com/128/1752/1752494.png" roundedCircle style={{height:'3.5vh',width:'3.5vw', border:"solid", borderRadius:'50%', borderColor:'#707786'}} />
                </Col>
                </ButtonGroup>
            </div>

            <br/>                    
            <Dropdown.Divider style={{width:'9vh', color:"#707786"}} />
            <br/>    

              <div className="p-2" >
                <ButtonGroup size="sm">
                <Col xs={6} md={4} >
                     <Image alt="explore" src="https://cdn-icons-png.flaticon.com/128/868/868355.png" roundedCircle style={{height:'3.5vh',width:'3.5vw', border:"solid", borderRadius:'50%', borderColor:'#707786'}} />
                </Col>
                </ButtonGroup>
            </div>

            <br/>    
         </Stack> 
        </div>
        </>
    );
};

export default Communities;