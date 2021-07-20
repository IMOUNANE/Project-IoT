//Import lié à react 
import React from "react"
// STYLESHEET
import "./Dashboard.css";

//IMG
import notif from  "../../Image/notif.png"


import WaterConsumption from "../WaterConsuption/WaterConsumption";
import ComponentDefault from "../ComponentDefault/ComponentDefault";
import WaterTank from "../WaterTank/WaterTank";



export default function Dashboard(){

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
                    className="col-md-6 my-5"percent={50}/>
                    
                <ComponentDefault 
                    title="Qualité de l'eau" 
                    className="col-md-5 my-5"
                />
              
            </div>           
        </div>
    </main>
 )
}