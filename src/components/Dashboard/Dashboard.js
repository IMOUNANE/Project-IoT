//Import lié à react 
import React from "react"
// STYLESHEET
import "./Dashboard.css";


import WaterConsumption from "../WaterConsuption/WaterConsumption";



export default function Dashboard(){
   
 return(
    <main className="dashboard">
        <div className="p-5">
            <h1>Dashbord</h1>
            <div className="d-flex flex-wrap justify-content-between">
                <WaterConsumption title="Water 1" className=" col-md-3"/>
                <WaterConsumption title="Water 2" className=" col-md-3"/>
                <WaterConsumption title="Water 3" className=" col-md-4"/>
            </div>           
        </div>
    </main>
 )
}