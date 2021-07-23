//Import lié à react 
import React, {useState} from "react";
import {Line} from 'react-chartjs-2';
import { Card} from '@material-ui/core';
import HeaderCard from "../HeaderCard/HeaderCard";
import OverlayWaterQuality from "../OverlayWaterQuality/OverlayWaterQuality";
import QualityWaterState from "../../services/route/WaterState";
import PotassiumValueChart from "../../services/route/PotassiumValueChart"
import PhValueChart from "../../services/route/PhValueChart"
import SodiumValueChart from "../../services/route/SodiumValueChart"
import ChlorureValueChart from "../../services/route/ChlorureValueChart"
import SulfateValueChart from "../../services/route/SulfateValueChart"
import "./WaterQuality.css";

export default function WaterQuality(props) {

    const [waterState] = QualityWaterState();
    const [valuePotassiumChart] = PotassiumValueChart();
    const [valuePhChart] = PhValueChart();
    const [valueSodiumChart] = SodiumValueChart()
    const [valueChlorureChart] = ChlorureValueChart()
    const [valueSulfateChart] = SulfateValueChart()
    const [overlay,setOverlay] = useState(false);
    const dayLabels = () => {
        let days = []
        let months = 32;
        for (let i = 0; i < months; i++) {
            days.push(i)
        }
        return days 
    }

    console.log(valuePhChart);


    let data = {
        labels: dayLabels(),
        datasets: [
            {
                label: 'Potassium',
                data: valuePotassiumChart,
                borderColor: 'rgb(0, 143, 251,1)',
                backgroundColor: 'transparent',
                borderWidth: 3,
                fill:'start',
                lineTension: 0.4, 
                pointRadius: 0,
                hitRadius: 12
            },
            {
                label: 'PH',
                data: valuePhChart,
                borderColor: 'rgb(0, 227, 150,1)',
                backgroundColor: 'transparent',
                borderWidth: 3,
                fill:'start',
                lineTension: 0.4, 
                pointRadius: 0,
                hitRadius: 12,
            },
            {
                label: 'Sodium',
                data: valueSodiumChart,
                borderColor: 'rgba(244, 151, 218, 1)',
                backgroundColor: 'transparent',
                borderWidth: 3,
                fill:'start',
                lineTension: 0.4, 
                pointRadius: 0,
                hitRadius: 12,
            },
            {
                label: 'Chlorure',
                data: valueChlorureChart,
                borderColor: 'rgba(251, 216, 127, 1)',
                backgroundColor: 'transparent',
                borderWidth: 3,
                fill:'start',
                lineTension: 0.4, 
                pointRadius: 0,
                hitRadius: 12,
            },
            {
                label: 'Sulfate',
                data: valueSulfateChart,
                borderColor: 'rgba(0, 236, 251, 1)',
                backgroundColor: 'transparent',
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

    return(
        <Card id="WaterQuality" className="m-3 p-1 card waterQuality-container">
            <HeaderCard
                title="Qualité de l’eau :"
                infoQuality={true}
                subtitle="Details"
                state= {waterState}
                setOverlay={setOverlay}
                overlay={overlay}
                addButton={true}
            />
            {overlay ? ( <OverlayWaterQuality
                subtitle="Valeurs de référence"
            />
            ) : (      
                <div className="chart-container">
                    <Line
                        data={data}
                        options={options}
                    />
                </div>  
            )}   
        </Card>
    )
}


