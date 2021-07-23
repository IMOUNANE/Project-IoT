import {useEffect,useState} from "react";
import axios from "axios";

let referenceValues = ["8 à 10", "7 à 10", "1,2 à 1,8", "0,9 à 1"] 

export default function QualityWaterValues() {

    const [qualityWater, setQualityWater] = useState([]);
    
    useEffect(()=>{
        axios.get("http://193.70.84.157:3490/getAverageQuality/500").then((response)=>{
            let res = response.data[0]
            res.map((element, index)=> {
                element["referenceValue"] = referenceValues[index];
                console.log(res);
            })
          setQualityWater(res)
        })
    },[])
    return [qualityWater, setQualityWater]
}