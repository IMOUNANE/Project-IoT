import "./WaterConsumption.css"

export  function WaterStat(props){
    const style={
        "background-color": props.color,
        "border-radius": "25%",
        width: "136px",
        height: "136px",
    }
    return(
        <div>
            <div className="d-flex justify-content-center" style={style}>
                <h5 className="water-stat-title">{props.title}</h5>
                <div>
                    
                </div>
            </div>
        </div>
    );

} 
export  function Donuts(props){
    const style={
        border: "5px solid "+props.color
    }
    return(
        <div>
            <div className="doughnut-color" style={style}/>
        </div>
    );

} 