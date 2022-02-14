import React from "react";
import Date from "./Date";
import ActualWeather from "./ActualWeather";

function Day(props){
    return(
        <div>
            <Date date={props.date}/>
            <ActualWeather actualWeather={props.actualWeather}/>
        </div>
    )
}

export default Day