import React,{useEffect,useState} from "react";
import axios from "axios";

export default function LevelWaterTank(){
    const [waterLevel, setWaterLevel] = useState(0);
    useEffect(()=>{
        axios.get("http://193.70.84.157:3490/getFieldByTimeAndTopic/60/Sonde_niveau").then((response)=>{
        let res = response.data[0];  
        if(res.length>0){
            const result = res[0]._value;
            setWaterLevel(result)
        }  
    })
    },[])
    return [waterLevel, setWaterLevel];

}