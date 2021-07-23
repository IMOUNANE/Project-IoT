import React from "react";
import "./HeaderCard.css";

export default function HeaderCard(props) {

    const {
        title,
        subtitle,
        setOverlay,
        overlay,
        state,
        infoQuality = false,
        addButton = false
    } = props;

    return(
        <div className="header-container d-flex justify-content-between align-items-center p-3">
            <div className="d-flex align-items-center p-1">
                <h1 className="header-title m-0">{title }</h1>
                {infoQuality && (
                    <span className="infoQuality">
                        {state} 
                    </span>
                )}
            </div>
            {addButton && (
                <button className="subtitle" onClick={()=>{setOverlay(!overlay)}}>
                    {subtitle} 
                </button>
            )}       
        </div>
    )
}