//Import lié à react 
import React,{useEffect,useState} from "react";
import { Card } from '@material-ui/core';
import "./WaterTank.css"
import HeaderCard from "../HeaderCard/HeaderCard";
import water_0 from "../../assets/IMG/water_0.png";
import water_10 from "../../assets/IMG/water_10.png";
import water_20 from "../../assets/IMG/water_20.png";
import water_30 from "../../assets/IMG/water_30.png";
import water_40 from "../../assets/IMG/water_40.png";
import water_50 from "../../assets/IMG/water_50.png";
import water_60 from "../../assets/IMG/water_60.png";
import water_70 from "../../assets/IMG/water_70.png";
import water_80 from "../../assets/IMG/water_80.png";
import water_90 from "../../assets/IMG/water_90.png";
import water_100 from "../../assets/IMG/water_100.png";
import $ from "jquery"

export default function WaterTank(props){
    const {percent}=props;
    const [currentPercent,setCurrentPercent] = useState(0)
    const tankImages=[water_0,water_10,water_20,water_30,water_40,water_50,water_60,water_70,water_80,water_90,water_100]
    const data = [
        {text:"Capacité",value:"30T"},
        {text:"Remplissage",value:"20T"},
        {text:"Capacité restante",value:"10T"}
    ];

    useEffect(()=>{
        renderImg(percent)
    },[percent,setCurrentPercent])

    const renderImg=(percent)=>{
        let i = 0;
        const stopwatch = Number(Math.floor(percent/10)*10)
        const animation = setInterval(()=>{

            let currentIndex=Number(i.toString().split("")[0]);

            if(i===100) currentIndex = 10; 
            if(stopwatch===i){
                clearInterval(animation);
                setCurrentPercent(percent)
            }

            $("#waterTank").attr("src",tankImages[currentIndex]);
            $("#waterTank").css("transition","0.5s")
            setCurrentPercent(i)
            i+=10;

        },400)
        
    }
    
 return(     
    <Card  className="m-3 p-3 card">
        <HeaderCard
            title="Reservoir d'eau de pluie"
            subtitle="Details"
        />
        <div className="p-5">
           
            <div className="d-flex flex-wrap justify-content-center my-5">
                <div className="col-xl-6 col-lg-12 my-3 waterTank-container">
                    <img id="waterTank" src={water_0}/>
                    <p className="percent">{currentPercent+"%"}</p>
                </div>
                <div className="col-xl-6 col-lg-12 p-3">
                  {data.map((content)=>{
                      return(
                        <div className="d-flex justify-content-between">
                            <p className="content-text" >{content.text}</p>
                            <p>{content.value}</p>
                        </div>
                      )
                  })}
                    
                </div>
            </div>
        </div>
    </Card>
 )
}