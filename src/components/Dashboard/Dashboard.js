//Import lié à react 
import React, { useEffect } from "react"
// STYLESHEET
import "./Dashboard.css";

//IMG
import notif from  "../../assets/IMG/notif.png"

//Component
import WaterConsumption from "../WaterConsuption/WaterConsumption";
import ComponentDefault from "../ComponentDefault/ComponentDefault";
import WaterTank from "../WaterTank/WaterTank";
import Notification from "../Notification/Notification";

//Services
import LevelWaterTank from "../../services/route/LevelWaterTank"
import RainWaterComsuption from "../../services/route/RainWaterComsuption"
import RainWaterComsuptionByDebimeter from "../../services/route/RainWaterComsuptionByDebimeter"




export default function Dashboard(){
   /* axios.get("http://193.70.84.157:3490/getFieldByTime/112").then((response)=>{
    let res=response.data[0];    
    const result=res.map((data)=> data._value)
    console.log(result)
    })*/
    const [waterLevel]=LevelWaterTank();
    console.log(waterLevel)
    const [rainWater]=RainWaterComsuption(1400,30000);
    //const [rainWaterByDebimeter]=RainWaterComsuptionByDebimeter(1400);
    //console.log(rainWaterByDebimeter)
  

 return(
    <main className="dashboard">
        <div className="p-3">
            <div id="dashbord-body" className="d-flex flex-wrap justify-content-between px-sm-0">
                <WaterConsumption 
                rainWater={rainWater}
                />
                <Notification 
                    number="1" 
                    cause="Qualité de l'eau mauvaise"
                />
                <WaterTank 
                    percent={waterLevel}/>
                    
                <ComponentDefault 
                    title="Qualité de l'eau" 
                    className="col-md-5 my-5"
                />
              
            </div>           
        </div>
    </main>
 )
}