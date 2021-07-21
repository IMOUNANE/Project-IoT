//Import lié à react 
import React, { useEffect } from "react"
// STYLESHEET
import "./Dashboard.css";

//IMG
import notif from  "../../Image/notif.png"


import WaterConsumption from "../WaterConsuption/WaterConsumption";
import ComponentDefault from "../ComponentDefault/ComponentDefault";
import WaterTank from "../WaterTank/WaterTank";
import LevelWaterTank from "../../services/route/LevelWaterTank";

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
        <div className="p-5">
            <h1>Dashbord</h1>
            <div id="dashbord-body" className="d-flex flex-wrap justify-content-between px-md-5 px-sm-0">
                <WaterConsumption 
                    title="Consommation d'eau" 
                    className="col-md-6 my-5"
                />
                <ComponentDefault 
                    title="Noctifications" 
                    className="col-md-5 my-5"
                    illustration={notif}
                  
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