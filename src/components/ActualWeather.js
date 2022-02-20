import React from "react";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Pressure from "./Pressure";

function ActualWeather(props){
    let{main,temp,humidity,pressure} = props.actualWeather
    return(
        <div className="actual-weather">
            <Icon main={main}/>
            <Temperature temperature={temp}/>
            <Humidity humidity={humidity}/>
            <Pressure pressure={pressure}/>
        </div>
    )
}

export default ActualWeather;