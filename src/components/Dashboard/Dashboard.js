//Import lié à react 
import React, { useEffect,useState } from "react"
// STYLESHEET
import "./Dashboard.css";

//IMG
import notif from  "../../assets/IMG/notif.png"

//Component
import WaterConsumption from "../WaterConsuption/WaterConsumption";
import ComponentDefault from "../ComponentDefault/ComponentDefault";
import WaterTank from "../WaterTank/WaterTank";
import Notification from "../Notification/Notification";
import DashboardHeader from "./DashboardHeader";

//Services
import LevelWaterTank from "../../services/route/LevelWaterTank"
import RainWaterComsuption from "../../services/route/RainWaterComsuption"
//import RainWaterComsuptionByDebimeter from "../../services/route/RainWaterComsuptionByDebimeter"


import WaterQuality from "../WaterQuality/WaterQuality";

import $ from "jquery";


export default function Dashboard(){
   /* axios.get("http://193.70.84.157:3490/getFieldByTime/112").then((response)=>{
    let res=response.data[0];    
    const result=res.map((data)=> data._value)
    console.log(result)
    })*/
    const [waterLevel]=LevelWaterTank();
    const [rainWater]=RainWaterComsuption(1400,30000);
    //const [rainWaterByDebimeter]=RainWaterComsuptionByDebimeter(1400);
    //console.log(rainWaterByDebimeter)
    const [circuit,setCircuit]=useState(false)
    useEffect(()=> {

        if(circuit){
            $(".dashboard").css("background-color","#E8F3EC")
        }else{
            $(".dashboard").css("background-color","#F56850")
        }
    },[circuit])

 return(
    <main className="dashboard">
        <div className="dashboard-content m-3">
            <div id="dashboard-header">
                <DashboardHeader
                circuit={circuit}
                setCircuit={setCircuit}
                />
            </div>
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
                    
                <WaterQuality/>
              
            </div>           
        </div>
    </main>
 )
}