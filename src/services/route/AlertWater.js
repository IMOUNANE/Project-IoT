import React,{useEffect,useState} from "react";
import axios from "axios";

export default function AlertWater(){
    const [alert,setAlert] = useState(null);
    useEffect(()=>{
        axios.get("http://193.70.84.157:3490/getFieldByTimeAndTopic/60/Alert").then((response)=>{
        let res = response.data[0];  
        console.log(res)
        
    })
    },[])
    return [ alert , setAlert ]

}