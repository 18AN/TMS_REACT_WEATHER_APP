import React from "react";
import { selectCircle } from "../utils/functions";
import {selectTemperatureColor} from "../utils/functions";

let temperature ={
    display: "flex",
    justifyContent: "center",
    fontFamily: "Oswald", "Arial": "sans-serif",
    fontSize: "5rem"
}

function Temperature(props){
    let main = props.main;
    let color = selectTemperatureColor(main)
    let style = {...temperature, color:`${color}`}
    let circle = selectCircle(main)
    return(
        <div style={style}>
            {Math.round(props.temperature)}
            <img src={`icons/${circle}.png`} className="circle"/>
        </div>
    )
}

export default Temperature;