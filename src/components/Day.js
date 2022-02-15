import React from "react";
import ActualDate from "./Date";
import ActualWeather from "./ActualWeather";

function Day(props){
    return(
        <div>
            <ActualDate date={props.date}/>
            <ActualWeather actualWeather={props.actualWeather}/>
        </div>
    )
}

export default Day