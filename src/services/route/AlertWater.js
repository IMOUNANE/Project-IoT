import React,{useEffect,useState} from "react";
import axios from "axios";

export default function AlertWater(){
    const [alert,setAlert] = useState([]);
    useEffect(()=>{
        axios.get("http://193.70.84.157:3490/getAlertByTimeAndTopic/5/Sonde_niveau").then((response)=>{
        let res = response.data[0];
        let alert 
        res.map((element) => {
           if (element._value == 1) {
               alert = true
           } else {
               alert = false
           }
        }) 
        console.log(alert)
        
    })
    },[])
    return [ alert , setAlert ]

}