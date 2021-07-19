//Import lié à react 
import React from "react";
import { Card } from '@material-ui/core';

export default function ComponentDefault(props){
    const {title,className,illustration}=props;
    console.log(illustration)

    
    
 return(
    <Card id="ComponentDefault" className={className}>
        <div className="p-5">
            <h3>{title}</h3>
            <div className="p-5">
                {illustration ? <img src={illustration}/>:""}
            </div>
            
        </div>
    </Card>
 )
}