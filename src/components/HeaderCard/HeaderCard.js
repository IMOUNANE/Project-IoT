import React from "react";
import "./HeaderCard.css";

export default function HeaderCard(props){
    const {title,infoQuality,subtitle}=props;

  

 return(
     <div className="header-container d-flex justify-content-between align-items-center p-3">
         <h1 className="header-title p-3">{title} <span className="infoQuality">{infoQuality}</span></h1>
         <h2 className="subtitle">{subtitle} </h2>
     </div>
 )
}