import React,{useEffect,useState} from "react";
import axios from "axios";
import moment from "moment";

export default function RainWaterComsuptionByDebimeter(minutes){
    //1  journée 1440 minutes 
    const [rainWaterByDebimeter, setRainWaterByDebimeter] = useState(0);
    useEffect(()=>{
        axios.get(`http://193.70.84.157:3490/getFieldByTimeAndTopic/${minutes}/Debimetre`).then((response)=>{
            let res = response.data[0];
                    
            res.map((data,index)=>{
                //let value = data._value;
                let dateOfData = data._time;
                if(index>0){
                        console.log( moment(dateOfData, 'HHmmss'))
                }
                console.log(res)
            })
        })
           
    
    },[])
    return [rainWaterByDebimeter, setRainWaterByDebimeter];

}

