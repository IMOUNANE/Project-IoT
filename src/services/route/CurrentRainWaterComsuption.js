import React,{useEffect,useState} from "react";
import axios from "axios";

export default function CurrentRainWaterComsuption(minutes){
    //1  journée 1440 minutes 
    const [currentRainWater, setCurrentRainWater] = useState(0);
    useEffect(()=>{
        axios.get(`http://193.70.84.157:3490/getFieldByTimeAndTopic/${minutes}/Sonde_niveau`).then((response)=>{
        let res = response.data[0];  
        let result = 0;
        const value=res[res.length-1]._value;
        setCurrentRainWater(value);
    })
    },[])
    return [currentRainWater, setCurrentRainWater];

}