import React from "react";

let style = {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Oswald", "Arial": "sans-serif",
}

function Humidity(props){
    let main = props.main;
    let humidityColor = {style:{color:""}, icon:{path:""}};
    main == 'Clear' ? humidityColor = {style:{color: "#247490"}, icon:{path:"icons/humidity-dark-blue.png"}} :
    main == 'Snow' ? humidityColor = {style:{color: "#247490"}, icon:{path:"icons/humidity-dark-blue.png"}} :
    main == 'Rain' ? humidityColor = {style:{color: "#D3EBF4"}, icon:{path:"icons/humidity-blue.png"}}:
    main == 'Clouds' ? humidityColor = {style:{color: "#D3EBF4"}, icon:{path:"icons/humidity-blue.png"}}:
    main == 'Drizzle' ? humidityColor = {style:{color: "#D3EBF4"}, icon:{path:"icons/humidity-blue.png"}}:
    main == 'Thunderstorm' ? humidityColor = {style:{color: "#D3EBF4"}, icon:{path:"icons/humidity-blue.png"}}:
    style = {color: "transparent"};
    return(
        <div style={Object.assign({}, style , humidityColor.style)}>
            <img src={humidityColor.icon.path} className="humidity"/>
            {`${props.humidity} %`}
        </div>
    )
}

export default Humidity;