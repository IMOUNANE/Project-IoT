//Import lié à react 
import React from "react";
import "./WaterConsumption.css"
import {Doughnut} from 'react-chartjs-2';
import { Card} from '@material-ui/core';
import {WaterStat} from "./LittleComponent";
import goute from "../../assets/IMG/goute.png"
import HeaderCard from "../HeaderCard/HeaderCard";

export default function WaterConsumption(props) {

    return(
      <Card id="WaterConsumption" className="m-3 p-3 card">
        <HeaderCard
          title="Consommation d'eau"
          subtitle="Details"
        />
        
          <div className="p-3">
            <div className="stat-water-comsumption d-flex justify-content-around align-items-center p-3">
              <div className="col-md-4 mb-4">
                <Doughnut
                  data={{
                    datasets:[
                      {
                        label:'# of votes',
                        data:[45,55],
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
                </div>
                <div className="d-flex align-items-center m-1">
                  <div className="potablewater water"></div>
                  <p className="description">Eau potable</p>
                </div>
              </div>
            </div> 
            
            <div className="title col-md-5 mt-4">
          </div> 
                
          <div className="details d-flex flex-wrap">
            <WaterStat title={"Economie"} color="#2AAF42" illustration={goute} subTitle={[{text:"2,5T"}, {text:"2,5€"}]}/>
            <WaterStat title={"Eau de Pluie"} color="#3DC8E6" subTitle={[{text:"500L"}]}/>
            <WaterStat title={"Eau portable"} color="#1467A2" subTitle={[{text:"2,2T"}]}/>
          </div>
              
        </div>
      </Card>
   )
  }