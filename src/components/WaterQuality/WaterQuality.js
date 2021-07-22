//Import lié à react 
import React, {useEffect} from "react";
import { Card} from '@material-ui/core';
import HeaderCard from "../HeaderCard/HeaderCard";
import "./WaterQuality.css";
import {Chart} from "chart.js";
export default function WaterQuality(props){
    const {chimicalData, qualityWater, qualityValue}=props;

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
                data: [12, 13, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 5, 2, 3, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12],
                backgroundColor: 'rgba(232, 252, 246, 1)',
                borderColor: 'rgb(0, 227, 150,1)',
                borderWidth: 3,
                fill:'start',
                lineTension: 0.4, 
                pointRadius: 0,
                hitRadius: 12,
            }
        ],
    }

    var delayed;

    let options = {
        type: 'line',
        data : data,
        responsive: true,

        animation: {
            onComplete: () => {
                delayed = true;
                },
                delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 100 + context.datasetIndex * 100;
                    }
                    return delay;
                },
            },
            scales: {
                x: {
                stacked: true,
                },
                y: {
                stacked: true
                }
            },
        
            animations: {
                tension: {
                duration: 900,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
                }
            },
            scales: {
                y: { 
                min: 0,
                max: 20
                }    
        },  
      
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                align: "start",
                labels: {
                    color: 'rgba(61, 61, 61, 1)'
                }
            },
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

            <div className="chart-WaterQuality" >
                <div className="d-flex justify-content-start">
                        <span className="mgData">mg/L</span>
                </div>
                <canvas id="myChart" width="300" height="300"></canvas> 
                <div className="d-flex justify-content-end dayData">
                    <span>Jours</span>
                </div>
            </div>

            <div className="chimical-container">
            <div className='d-flex justify-content-end'>
                <h2 className='title-reference-chimical'>Valeurs de référence</h2>
            </div>

            <div className='d-flex flex-row justify-content-between'>
                <div className='d-flex flex-row'>
                    <div className='name-chimical'>
                        <ul>
                            <li>Sulfate:</li>
                            <li>Chlorure:</li>
                            <li>Sodium:</li>
                            <li>Potassium:</li>
                            <li>Nitrate:</li>
                            <li>pH</li>
                        </ul>
                    </div>
                    <div  className='value-chimical'>
                        <ul>
                            <li>9,5 mg/L</li>
                            <li>9 mg/L</li>
                            <li>1,6 mg/L</li>
                            <li>0,8 mg/L</li>
                            <li>1,6 mg/L</li>
                            <li>5 mg/L</li>
                        </ul>
                    </div>
                </div>
                <div  className='d-flex justify-content-flex-end value-chimical-reference'>
                   <div className='text-end'>
                   <ul>
                        <li>8 à 10</li>
                        <li>7 à 10</li>
                        <li>1,2 à 1,8</li>
                        <li>0,8 à 1</li>
                        <li>1,6 à 4</li>
                        <li>5 à 7</li>
                    </ul>
                   </div>
                </div>
            </div>  
            </div>
                
        </Card>
    )
}


