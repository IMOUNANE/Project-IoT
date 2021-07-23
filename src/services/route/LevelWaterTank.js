import React,{useEffect,useState} from "react";
import axios from "axios";

export default function LevelWaterTank(){
    const [waterLevel, setWaterLevel] = useState(0);
    useEffect(()=>{
        axios.get("http://193.70.84.157:3490/getFieldByTimeAndTopic/1440/Sonde_niveau").then((response)=>{
        let res = response.data[0];  
        let result=0;
        if(res.length>0){
            res.map((data,index)=>{
                if(index>0){
                    if(data._value>res[Number(index-1)]._value){
                        result+=(data._value-res[Number(index-1)]._value)
                    }
                }
            })
            setWaterLevel(result)
        }  
    })
    },[])
    return [waterLevel, setWaterLevel];

}