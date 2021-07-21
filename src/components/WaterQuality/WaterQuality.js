//Import lié à react 
import React, {useEffect} from "react";
import { Card} from '@material-ui/core';
import HeaderCard from "../HeaderCard/HeaderCard";
import "./WaterQuality.css";
import {Chart} from "chart.js";
export default function WaterQuality(props){
    const {title,className}=props;

    const dayLabels = () => {
        let days = []
        let months = 32;
        for (let i = 0; i < months; i++) {
            days.push(i)
        }
        return days 
    }

    let data = {
        labels: dayLabels(),
        datasets: [
            {
                label: 'PH',
                data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7],
                backgroundColor: 'rgba(0, 143, 251, 0.09)',
                borderColor: 'rgb(0, 143, 251,1)',
                borderWidth: 3,
                fill:'start',
                lineTension: 0.4, 
                pointRadius: 0,
                hitRadius: 12
            },
            {
                label: 'Qualité globale de l’eau',
                data: [12, 19, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 5, 2, 3, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12],
                backgroundColor: 'rgba(232, 252, 246, 1)',
                borderColor: 'rgb(0, 227, 150,1)',
                borderWidth: 3,
                fill:'start',
                lineTension: 0.4, 
                pointRadius: 0,
                hitRadius: 12
            }
        ],
    }

    let options = {
        type: 'line',
        data : data,
        legend: {
            display: true,
            position: "bottom",
            align: "start",
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                }
            }]
        }
    }

    useEffect(() => {
        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
            type: "line",
            data: data, 
            options: options, 
        });
    },[])

    return(
        <Card id="WaterQuality" className="m-3 p-3 card">
            <HeaderCard
                title="Qualité de l’eau :"
                infoQuality="normale"
                subtitle="Details"
            />

            <div className="test" >
                <canvas id="myChart" width="300" height="300"></canvas> 
            </div>
                
        </Card>
    )
}


