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
import CurrentRainWaterComsuption from "../../services/route/CurrentRainWaterComsuption"
import AlertWater from "../../services/route/AlertWater";
import QualityWaterValues from "../../services/route/QualityWaterValues"
import axios from "axios";

import WaterQuality from "../WaterQuality/WaterQuality";

import $ from "jquery";


export default function Dashboard(){
   
    const [waterLevel]=LevelWaterTank();
    const [currentRainWater]=CurrentRainWaterComsuption(300);
    console.log(currentRainWater)
    const[qualityWater] = QualityWaterValues();

    const [circuit,setCircuit]=useState(true)
    
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
                rainWater={60}
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