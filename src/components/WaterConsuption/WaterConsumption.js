//Import lié à react 
import React from "react";
import "./WaterConsumption.css"
import {Doughnut} from 'react-chartjs-2';
import { Card} from '@material-ui/core';
import {Donuts,WaterStat} from "./LittleComponent";
import goute from "../../Image/goute.png"
export default function WaterConsumption(props){
    const {title,className}=props;
    

 return(
    <Card id="WaterConsumption" className={className}>
        <div className="p-5">
            <h3>{title}</h3>
            <div className="stat-water-comsumption d-flex justify-content-between my-5">
              <div className="col-md-5 mb-5">
                <Doughnut
                  data={{
                    labels:['Eau de Pluie','Eau Potable'],
                    datasets:[
                      {
                        label:'# of votes',
                        data:[45,55],
                        backgroundColor: [
                          'rgba(61, 200, 230, 1)',
                          'rgba(20, 103, 162, 1)',
                        ],
                      }
                    ]
                  }}
                />
              </div>
             
              <div className="title col-md-5 mt-4">
                  <div className="d-flex flex-wrap">
                    <div className="col-md-12 d-flex justify-content-between my-3">
                      <Donuts className="col-md-3" color="#3DC8E6"/>
                      <label className="col-md-9">Eau de pluie</label>
                    </div>
                    <div className="col-md-12 d-flex justify-content-between my-3">
                      <Donuts className="col-md-3" color="#1467A2"/>
                      <label className="col-md-9">Eau potable</label>
                    </div>
                  </div>
              </div> 
            </div>
            <div className="details d-flex flex-wrap justify-content-between my-2">
                <WaterStat title={"Economie"} color="#2AAF42" illustration={goute} subTitle={[{text:"2,5T"}, {text:"2,5€"}]}/>
                <WaterStat title={"Eau de Pluie"} color="#3DC8E6" subTitle={[{text:"500L"}]}/>
                <WaterStat title={"Eau portable"} color="#1467A2" subTitle={[{text:"2,2T"}]}/>
            </div>
            
        </div>
    </Card>
 )
}