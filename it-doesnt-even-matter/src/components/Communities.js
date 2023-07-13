import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Communities() 
{
    return (
        <>
        <div>
         <Stack gap={20} className="col-md-5 mx-auto"> 
            <div className="p-2" >
                <ButtonGroup size="sm">
                    <Button className="communities" variant="primary" />
                </ButtonGroup>
            </div>
            
            <br/>
            
            <div className="p-2" >
                <ButtonGroup size="sm">
                    <Button variant="primary" />
                    
                    <Button variant="primary"/>
                    
                    <Button variant="primary"/>
                            
                    <Button variant="primary"/>
                            
                    <Button variant="primary"/>
                            
                    <Button variant="primary"/>
                            
                    <Button variant="primary"/>
                            
                    <Button variant="primary"/>
                            
                    <Button variant="primary"/>
                </ButtonGroup>
            </div>

         </Stack> 
        </div>
        </>
    );
};

export default Communities;