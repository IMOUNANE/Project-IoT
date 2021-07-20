import "./WaterConsumption.css"

export  function WaterStat(props){
    const {color, title, illustration, subTitle } = props;
    const style={
        "background-color": color,
        "border-radius": "25%",
        "width": "136px",
        "height": "136px",
    }
    return(
        <div>
            <div className="d-flex flex-wrap justify-content-center p-3" style={style}>
                <div className=" water-stat-title align-items-center col-md-12">
                    <h5 className="m-0">{title}</h5>
                </div>
             
                <div className="d-flex flex-wrap col-md-12 justify-content-center"  >
                {illustration && (
                    <div className="col-md-5">
                        <img src={illustration}/>
                    </div>
                )}
                    <div clasName={illustration ? "col-md-5" : "col-md-12" }>
                    {subTitle && (subTitle.map((content) => {
                        return(
                            <>
                                <div className="col-md-12">
                                    <span className="subtitle-color">{content.text}</span>
                                </div>
                            </>
                        )
                    }))}
                    </div>     
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