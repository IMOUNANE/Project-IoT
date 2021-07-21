import React from "react";
import "./HeaderCard.css";

export default function HeaderCard(props){
    const {
        title,
        subtitle,
        setOverlay,
        overlay,
        addButton = false
    } = props;

  

 return(
     <div className="header-container d-flex justify-content-between align-items-center p-3">
         <h1 className="header-title p-3">{title}</h1>
         {addButton && (
            <button className="subtitle" onClick={()=>{setOverlay(!overlay)}}>
                {subtitle} 
            </button>
         )}
     </div>
 )
}