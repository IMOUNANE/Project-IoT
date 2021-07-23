import "./WaterConsumption.css";


export  function WaterStat(props){
    const {color, title, illustration, subTitle } = props;
    const style={
        "background-color": color,
        "border-radius": "25%",
        "height": "128px",
        "width": "148px"
    }
    return(
        <div>
            <div className="d-flex flex-wrap justify-content-center p-3 m-2" style={style}>
                <div className=" align-items-center col-md-12">
                    <h1 className="mt-2 water-stat-title">{title}</h1>
                </div>
             
                <div className="d-flex flex-wrap col-md-12 justify-content-center">
                    <div clasName="col-md-12">
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