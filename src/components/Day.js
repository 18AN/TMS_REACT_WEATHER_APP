import React from "react";
import ActualDate from "./Date";
import ActualWeather from "./ActualWeather";

function Day(props){
    return(props.index == 0 ?
        <div className="first-day">
            <ActualDate date={props.date}/>
            <ActualWeather actualWeather={props.actualWeather}/>
        </div>
        :
        <div className="day">
            <ActualDate date={props.date}/>
            <ActualWeather actualWeather={props.actualWeather}/>
        </div>
    )
}

export default Day