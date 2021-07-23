

import React,{useEffect,useState} from "react";
import axios from "axios";


export default function QualityWaterValues(){
    const [qualityWater, setQualityWater] = useState(0);
    useEffect(()=>{
        axios.get("http://193.70.84.157:3490/getAverageQuality/60").then((response)=>{
            let res = response.data[0]
            setQualityWater(res)
        })
    },[])
    return [qualityWater, setQualityWater]
}