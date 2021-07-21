//Import lié à react 
import React, { useEffect } from "react"
// STYLESHEET
import "./Dashboard.css";

//IMG
import notif from  "../../assets/IMG/notif.png"


import WaterConsumption from "../WaterConsuption/WaterConsumption";
import ComponentDefault from "../ComponentDefault/ComponentDefault";
import WaterTank from "../WaterTank/WaterTank";
<<<<<<< HEAD
import LevelWaterTank from "../../services/route/LevelWaterTank";
=======
import Notification from "../Notification/Notification";



>>>>>>> add notification component and update css files

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
            <div id="dashbord-body" className="d-flex flex-wrap justify-content-around px-sm-0">
                <WaterConsumption 
                    title="Consommation d'eau"
                />
                <Notification 
                    number="1" 
                    cause="Qualité de l'eau mauvaise"
                />
                <WaterTank title="Réservoir d'eau de pluie" 
                    className="col-md-6 my-5" percent={waterLevel}/>
                    
                <ComponentDefault 
                    title="Qualité de l'eau" 
                    className="col-md-5 my-5"
                />
              
            </div>           
        </div>
    </main>
 )
}