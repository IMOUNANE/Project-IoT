import {useEffect,useState} from "react";
import axios from "axios";

export default function PhWater() {

    const [PhValue, setPhValue] = useState([]);

    useEffect(()=> {
        axios.get("http://193.70.84.157:3490/getAverage/500/PH").then((response)=> {
            let res = response.data[0];   
            setPhValue(res)
        })
    },[])
    return [PhValue, setPhValue]
}