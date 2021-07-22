//Import lié à react 
import React, {useState, useEffect} from "react";
import {Line} from 'react-chartjs-2';
import { Card} from '@material-ui/core';
import HeaderCard from "../HeaderCard/HeaderCard";
import "./WaterQuality.css";
import {Chart} from "chart.js";
import OverlayWaterQuality from "../OverlayWaterQuality/OverlayWaterQuality"
export default function WaterQuality(props){
    const {title,className}=props;
    const [overlay,setOverlay] = useState(false);
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

    // useEffect(() => {
    //     const ctx = document.getElementById("myChart");
    //     new Chart(ctx, {
    //         type: "line",
    //         data: data, 
    //         options: options, 
    //     });
    //     console.log(overlay);
    // },[])

    return(
        <Card id="WaterQuality" className="m-3 p-3 card waterQuality-container">
            <HeaderCard
                title="Qualité de l’eau :"
                infoQuality="normale"
                subtitle="Details"
                setOverlay={setOverlay}
                overlay={overlay}
                addButton={true}
            />
{overlay ? ( <OverlayWaterQuality
                    subtitle="Valeurs de référence"
                />
             
              ) : (
                
                <div className="test" >
               <Line
                data={data}
                options={options}
               />
            </div>  
            )}   
        </Card>
    )
}


