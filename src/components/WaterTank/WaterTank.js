//Import lié à react 
import React,{useEffect,useState} from "react";
import { Card } from '@material-ui/core';
import water_0 from "../../Image/water_0.png";
import water_10 from "../../Image/water_10.png";
import water_20 from "../../Image/water_20.png";
import water_30 from "../../Image/water_30.png";
import water_40 from "../../Image/water_40.png";
import water_50 from "../../Image/water_50.png";
import water_60 from "../../Image/water_60.png";
import water_70 from "../../Image/water_70.png";
import water_80 from "../../Image/water_80.png";
import water_90 from "../../Image/water_90.png";
import water_100 from "../../Image/water_100.png";
import $ from "jquery"

export default function WaterTank(props){
    const {percent, title, className}=props;
    const [currentPercent,setCurrentPercent] = useState(0)
    const tankImages=[water_0,water_10,water_20,water_30,water_40,water_50,water_60,water_70,water_80,water_90,water_100]
    const data = [
        {text:"Capacité",value:"20T"},
        {text:"Capacité",value:"230T"},
        {text:"Capacité",value:"30T"}
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
                console.log(percent)
                console.log(currentPercent)
            }
            $("#waterTank").attr("src",tankImages[currentIndex]);
            $("#waterTank").css("transition","0.5s")
            setCurrentPercent(i)
            i+=10;
        },400)
        
    }
    
   
 return(     
    <Card  className={className}>
        <div className="p-5">
        <h3>{title}</h3>
            
            <div className="d-flex flex-wrap justify-content-center my-5">
                <div className="col-xl-6 col-lg-12 my-3">
                    <img id="waterTank" src={water_0}/>
                    <p>{currentPercent+"%"}</p>
                </div>
                <div className="col-xl-6 col-lg-12 my-3">
                  {data.map((content)=>{
                      return(
                        <div className="d-flex justify-content-between">
                            <h5>{content.text}</h5>
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