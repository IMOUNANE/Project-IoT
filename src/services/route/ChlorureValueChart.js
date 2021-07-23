import {useEffect,useState} from "react";
import axios from "axios";

export default function ChlorureValueChart() {

    const [valueChlorureChart, setChlorureValueChart] = useState([]);
    
    useEffect(()=>{
        axios.get("http://193.70.84.157:3490/getChlorure/31").then((response)=>{
            let values = []
            let res = response.data[0]
            res.map((element) => {
                values.push(element._value)
            })
            setChlorureValueChart(values)
        })
    },[])
    return [valueChlorureChart, setChlorureValueChart]
}