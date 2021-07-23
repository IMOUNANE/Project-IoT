import React,{useEffect,useState} from "react";
import axios from "axios";

export default function QualityWaterState() {

    const [waterState, setWaterState] = useState("");
    
    useEffect(()=> {
        axios.get("http://193.70.84.157:3490/getAverageQuality/500").then((response)=> {
            let state
            let values = 0
            let res = response.data[0]
            res.map((element)=> {
                values = values + Math.round(element._value)
            })
            if (values < 26.8) {
                state = "bonne"
            } else {
                state = "mauvaise"
            }

            setWaterState(state)
        })
    },[])
    return [waterState, setWaterState]
}

