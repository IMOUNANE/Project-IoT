import React from "react"
import QualityWaterValues from "../../services/route/QualityWaterValues"
import setPhValue from "../../services/route/PhWater"
import "./OverlayWaterQuality.css";

export default function OverlayWaterQuality(props) {
    const{subtitle}=props
    const[qualityWater] = QualityWaterValues();
    const[PhValue] = setPhValue();
    console.log(PhValue);

    return(
    
        <div>
            <p className="d-flex justify-content-end p-3 m-0">{subtitle}</p>

            <div className="p-4">
                {qualityWater.map((element) => (
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between p-1 values-container">
                            <span className="measurement">{element._measurement}:</span>
                            <span className="value-chimical">{Math.round(element._value)} mg/L</span>
                        </div>
                        <div className="referenceValue">
                            <span>{element.referenceValue} mg/L</span>
                        </div>
                </div>))}
                {PhValue.map((element)=> (
                <div className="value-container d-flex justify-content-between">
                    <div className="d-flex justify-content-between p-1 values-container">
                         <span className="measurement">{element._measurement}:</span>
                        <span className="value-chimical">{Math.round(element._value)}</span> 
                    </div>
                    <div className="referenceValue">
                        <span>5 à 7</span>
                    </div>
                </div>))}    
            </div>
        </div> 
    )
}