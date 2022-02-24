import React from "react";

let temperature ={
    display: "flex",
    justifyContent: "center",
    fontFamily: "Oswald", "Arial": "sans-serif",
    fontSize: "5rem"
}

function Temperature(props){
    
    let main = props.main;
    let temperatureColor = {style:{color:""}, circle:{path:""}};
    main == 'Clear' ? temperatureColor = {style:{color: "#4DB0D3"}, circle:{path:"icons/Blue.png"}} :
    main == 'Clouds' ? temperatureColor = {style:{color: "#E6DF95"}, circle:{path:"icons/Yellow.png"}}:
    main == 'Rain' ? temperatureColor = {style:{color: "#E6DF95"}, circle:{path:"icons/Yellow.png"}}:
    main == 'Drizzle' ? temperatureColor = {style:{color: "#2B8BAD"}, circle:{path:"icons/Yellow.png"}}:
    main == 'Thunderstorm' ? temperatureColor = {style:{color: "#E6DF95"}, circle:{path:"icons/Yellow.png"}}:
    main == 'Snow' ? temperatureColor = {style:{color: "#0E2E3A"}, circle:{path:"icons/Dark-blue.png"}}:
    style = {color: "transparent"};
    return(
        <div style={Object.assign({}, temperature , temperatureColor.style)}>
            {Math.round(props.temperature)}
            <img src={temperatureColor.circle.path} className="circle"/>
        </div>
    )
}

export default Temperature;