import React from "react";

let style = {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Oswald", "Arial": "sans-serif",
}

function Pop(props){
    let main = props.main;
    let popColor = {style:{color:""}, icon:{path:""}};
    main == 'Clear' ? popColor = {style:{color: "#247490"}, icon:{path:"icons/umbrella-dark-blue.png"}} :
    main == 'Snow' ? popColor = {style:{color: "#247490"}, icon:{path:"icons/umbrella-dark-blue.png"}} :
    main == 'Rain' ? popColor = {style:{color: "#D3EBF4"}, icon:{path:"icons/umbrella-blue.png"}}:
    main == 'Clouds' ? popColor = {style:{color: "#D3EBF4"}, icon:{path:"icons/umbrella-blue.png"}}:
    main == 'Drizzle' ? popColor = {style:{color: "#D3EBF4"}, icon:{path:"icons/umbrella-blue.png"}}:
    main == 'Thunderstorm' ? popColor = {style:{color: "#D3EBF4"}, icon:{path:"icons/umbrella-blue.png"}}:
    style = {color: "transparent"};
    return(
        <div style={Object.assign({}, style , popColor.style)}>
            <img src={popColor.icon.path} className="umbrella"/>
            {`${Math.round(props.pop * 100)}%`}
        </div>
    )
}

export default Pop;