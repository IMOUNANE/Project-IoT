//Import lié à react 
import React, { useEffect,useState } from "react";

import "./Dashboard.css";

import WaterConsumption from "../WaterConsuption/WaterConsumption";
import WaterTank from "../WaterTank/WaterTank";
import Notification from "../Notification/Notification";
import DashboardHeader from "./DashboardHeader";

import LevelWaterTank from "../../services/route/LevelWaterTank"
import CurrentRainWaterComsuption from "../../services/route/CurrentRainWaterComsuption"
import AlertWater from "../../services/route/AlertWater";
import QualityWaterValues from "../../services/route/QualityWaterValues"
import axios from "axios";

import WaterQuality from "../WaterQuality/WaterQuality";

import $ from "jquery";


export default function Dashboard(){
   
    const [alert] = AlertWater();
    const [waterLevel]=LevelWaterTank();
    const [circuit,setCircuit]=useState(true)
    
    
    useEffect(()=> {
        if(circuit){
            $(".dashboard").css("background-color","#E8F3EC")
        }else{
            $(".dashboard").css("background-color","#D54D4D")
        }
       
        
    },[circuit])

    console.log(alert);
    return(
        <main className="dashboard">
            <div className="dashboard-content m-5">
                <div id="dashboard-header">
                    <DashboardHeader
                    circuit={circuit}
                    setCircuit={setCircuit}
                    />
                </div>
                <div id="dashbord-body" className="d-flex flex-wrap justify-content-between px-sm-0">
                    <WaterTank 
                        percent={waterLevel}
                    /> 
                     <Notification 
                        number="0" 
                        cause="Aucune anomalie(s)"
                    />
                    <WaterConsumption 
                    /> 
                    <WaterQuality/>
                
                </div>           
            </div>    
    </main>
 )
}