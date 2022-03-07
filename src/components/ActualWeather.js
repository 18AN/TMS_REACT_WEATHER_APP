import React from "react";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Pop from "./pop";
import {selectColor} from "../utils/functions"

let actualWeather = {
    minHeight: "21.5rem",
    marginTop: "0.5rem",
    paddingTop: "1rem",
    borderRadius: "2rem",
    boxShadow: "0.5rem 0.5rem 2rem #8c9599"
}

function ActualWeather(props){
    const{main,temp,humidity,pop} = props.actualWeather;
    let color = selectColor(main)
    let style = {...actualWeather, backgroundColor: `${color}` }
    return(
        <div  style={style}>
            <Icon main={main}/>
            <Temperature temperature={temp} main={main}/>
            <Pop pop={pop} main={main}/>
            <Humidity humidity={humidity} main={main}/>
        </div>
    )
}

export default ActualWeather;