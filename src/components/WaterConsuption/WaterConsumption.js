//Import lié à react 
import React, { useState, useEffect } from "react";
import "./WaterConsumption.css"
import { Line } from 'react-chartjs-2';
import Chart from "chart.js";
import axios from "axios";
import { Button } from '@material-ui/core';
export default function WaterConsumption(props){
    const {title,className}=props;
    const [chartData, setChartData] = useState({});
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "level of thiccness",
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };


    
 return(
    <section id="WaterConsumption" className={className}>
        <div className="p-5">
            <h3>{title}</h3>
            <Line 
                data={chartData}
                options={{
                    responsive:true,
                    title:{text:"test chartjs",display:true},
                    scales:{
                        yAxes:[
                            {
                                ticks:{
                                    autoSkip:true,
                                    maxTicksLimit:10,
                                    beginAtZero:true,
                                },
                                gridLines:{
                                    display:false,
                                }
                            }
                        ],
                        xAxes:[{
                            gridLines:{
                                display:false
                            }
                        }]
                    }
                }}
             />
            <Button onClick={()=>chart()}>Afficher les données</Button> 
        </div>
    </section>
 )
}