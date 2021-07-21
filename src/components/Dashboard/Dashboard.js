//Import lié à react 
import React, { useEffect } from "react"
// STYLESHEET
import "./Dashboard.css";

//IMG
import notif from  "../../assets/IMG/notif.png"


import WaterConsumption from "../WaterConsuption/WaterConsumption";
import ComponentDefault from "../ComponentDefault/ComponentDefault";
import WaterTank from "../WaterTank/WaterTank";
import LevelWaterTank from "../../services/route/LevelWaterTank";
import Notification from "../Notification/Notification";
import WaterQuality from "../WaterQuality/WaterQuality";



export default function Dashboard(){
   /* axios.get("http://193.70.84.157:3490/getFieldByTime/112").then((response)=>{
    let res=response.data[0];    
    const result=res.map((data)=> data._value)
    console.log(result)
    })*/
    const [waterLevel]=LevelWaterTank();
    console.log(waterLevel)
  

 return(
    <main className="dashboard">
        <div className="p-3">
            <div id="dashbord-body" className="d-flex flex-wrap justify-content-between px-sm-0">
                <WaterConsumption 
                />
                <Notification 
                    number="1" 
                    cause="Qualité de l'eau mauvaise"
                />
                <WaterTank 
                    percent={waterLevel}/>
                    
                <WaterQuality/>
              
            </div>           
        </div>
    </main>
 )
}