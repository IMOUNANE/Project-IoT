import React from "react";
import { Card} from '@material-ui/core';
import HeaderCard from "../HeaderCard/HeaderCard";
import "./Notification.css";
import notif from  "../../assets/IMG/notif.png"

export default function Noctification(props) {
    const{number, cause} =props
    
    return(
        <Card className="mt-3 p-3 card">
            <HeaderCard
                title="Notifications"
                subtitle="Details"
            />
            <div className=" notification-container d-flex justify-content-around align-items-center p-3">
                <img src={notif} alt="notification"></img>
                <div className="d-flex justify-content-between flex-column description-container">
                    <div className="d-flex align-items-center">
                        <span className="anomaly-number">{number}</span>
                        <p className="m-0">Anomalie(s)</p>
                    </div>
                    <div>{cause}</div>
                </div>
            </div>
        </Card>
    )
}
