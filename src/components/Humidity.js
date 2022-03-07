import React from "react";
import { selectImage } from "../utils/functions";

function Humidity(props){
    let main = props.main;
    let style = selectImage(main)
    return(
        <div className={`humidity-${style}`}>
            <img src={`icons/humidity-${style}.png`} className="humidity"/>
            {`${props.humidity} %`}
        </div>
    )
}

export default Humidity;