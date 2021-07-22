import React,{useEffect,useState} from "react";
import axios from "axios";

export default function WaterQuality(){
    //1  journée 1440 minutes 
    const [rainWater, setRainWater] = useState(0);
    useEffect(()=>{
        const date = new Date();
 
        axios.get(`/getAverageByRange/:date1/:date2/:sensor`).then((response)=>{
        let res = response.data[0];   
        let percentEmpty = 0; 
        res.map((data,index) => {
            const value = data._value;
            if(index>0){
                if(value>res[Number(index-1)]._value){
                    percentEmpty += (value-res[Number(index-1)]._value)
                }
            }
        })
        setRainWater((percentEmpty*sizeTank)/100);
    })
    },[])
    return [rainWater, setRainWater];

}