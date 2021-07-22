import React from "react"
import QualityWaterValues from "../../services/route/QualityWaterValues"

export default function OverlayWaterQuality(props) {
    const{
        subtitle, 
        data, 
        value
    } = props;

    const[qualityWater] = QualityWaterValues();
    console.log(qualityWater);
return(
    
    <div>
        <p className="d-flex justify-content-end p-3 m-0">{subtitle}</p>
        <div>

            <div className="p-3">
            {qualityWater.map((element) => (
                <div className="d-flex justify-content-between p-2">
                    <div className="d-flex flex-column p-1">
                        <div className="d-flex">
                            <span className="measurement">{element._measurement}:</span>
                            <span>{element._value} mg/L</span>
                            <div>
                            </div>
                            <span>{element.referenceValue} mg/L</span>
                         </div>
                    </div>
                </div>))}
            </div>  
                {/* <div className="d-flex justify-content-between p-3"> */}
                    
                    {/* <div className="d-flex flex-column"> */}
                    {/* {values.map((value) => (<span>{value}</span>))} */}
                        {/* {qualityWater.map((element) => (<span>{element._value} mg/L</span> ))} */}
                    {/* </div> */}
                    {/* <div className="d-flex flex-column">
                        {referenceValues.map((valueReference) => (<span>{valueReference}</span>))}
                    </div>
                </div> */}

                <div className="value-container d-flex justify-content-between mb-2">
                    <div className="value">
                        <p>{data}</p>
                        <span>{value}</span>
                    </div>
                    <span className="Values-reference">5 à 7</span>
                </div>        
        </div>
    </div>
    )
}