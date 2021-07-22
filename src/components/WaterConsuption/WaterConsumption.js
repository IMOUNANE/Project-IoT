//Import lié à react 
import React,{useState,useEffect} from "react";
import "./WaterConsumption.css"
import {Doughnut} from 'react-chartjs-2';
import { Card} from '@material-ui/core';
import {WaterStat} from "./LittleComponent";
import drop from "../../assets/IMG/goute.png"
import HeaderCard from "../HeaderCard/HeaderCard";

export default function WaterConsumption(props) {
  const {rainWater}=props;
  const totalComsuption = 1000000;
  const realWaterPercent = (rainWater/totalComsuption)*100
  const [overlay,setOverlay] = useState(false);

    return(
      <Card id="WaterConsumption" className="m-3 p-3 card">
        <HeaderCard
          title="Consommation d'eau"
          subtitle="Details"
          setOverlay={setOverlay}
          overlay={overlay}
          addButton={true}
        />
    {!overlay ? (
      <div className="p-3">
        <div className="stat-water-comsumption d-flex justify-content-around align-items-center p-3">
         <div className="col-md-4 mb-4">
           <Doughnut
             data={{
               datasets:[
                 {
                   label:'# of votes',
                   data:[realWaterPercent,(100-realWaterPercent)],
                   backgroundColor: [
                     'rgba(61, 200, 230, 1)',
                     'rgba(20, 103, 162, 1)',
                   ],
                 }
               ],
               
               
             }}
           />
         </div>
         <div className="d-flex flex-column">
           <div className="d-flex align-items-center m-1">
             <div className="rainwater water"></div>
             <p className="description">Eau de pluie</p>
             <p className="comsuption-percent">{Math.floor(realWaterPercent)+"%"}</p>
           </div>
           <div className="d-flex align-items-center m-1">
             <div className="potablewater water"></div>
             <p className="description">Eau potable</p>
             <p className="comsuption-percent">{Math.floor((100-realWaterPercent))+"%"}</p>
           </div>
         </div>
       </div> 
       
       <div className="title col-md-5 mt-4">
     </div> 
           
     <div className="details d-flex flex-wrap">
       <WaterStat 
          title={"Economie"} 
          color="#2AAF42" 
          illustration={drop} 
          subTitle={[{text:`${Math.floor(rainWater/1000)} m3`}, {text:`${Math.floor(rainWater*0.003)} €`}]}
        />
       <WaterStat title={"Eau de Pluie"} color="#3DC8E6" subTitle={[{text:`${Math.floor(rainWater)} L`}]}/>
       <WaterStat title={"Eau potable"} color="#1467A2" subTitle={[{text:`${Math.floor(totalComsuption-rainWater)} L`}]}/>
     </div>
         
    </div>
    ) : (
        <div>hello</div>
    )}
    </Card>
   )
  }