import React from "react";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Pop from "./pop";
let actualWeather = {
    minHeight: "21.5rem",
    marginTop: "0.5rem",
    paddingTop: "1rem",
    borderRadius: "2rem",
    boxShadow: "0.5rem 0.5rem 2rem #8c9599"
}

function ActualWeather(props){
    const{main,temp,humidity,pop} = props.actualWeather;
    let style;
    main == 'Clear' ? style = {backgroundColor: "#E6DF95"}:
    main == 'Clouds' ? style = {backgroundColor: "#4DB0D3"}:
    main == 'Rain' ? style = {backgroundColor: "#2B8BAD"}:
    main == 'Drizzle' ? style = {backgroundColor: "#2B8BAD"}:
    main == 'Thunderstorm' ? style = {backgroundColor: "#0E2E3A"}:
    main == 'Snow' ? style = {backgroundColor: "#BCE1EF"}:
    style = {backgroundColor: "transparent"};
    return(
        <div  style={Object.assign({}, actualWeather , style)}>
            <Icon main={main}/>
            <Temperature temperature={temp} main={main}/>
            <Pop pop={pop} main={main}/>
            <Humidity humidity={humidity} main={main}/>
        </div>
    )
}

export default ActualWeather;