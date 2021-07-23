import {useEffect,useState} from "react";
import axios from "axios";

export default function SulfateValueChart() {

    const [valueSulfateChart, setSulfateValueChart] = useState([]);
    
    useEffect(()=>{
        axios.get("http://193.70.84.157:3490/getSulfate/31").then((response)=>{
            let values = []
            let res = response.data[0]
            res.map((element) => {
                values.push(element._value)
            })
            setSulfateValueChart(values)
        })
    },[])
    return [valueSulfateChart, setSulfateValueChart]
}