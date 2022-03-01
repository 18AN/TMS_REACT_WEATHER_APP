import React from "react";

function Icon(props){
    return(props.main == "Snow" ?
        <div>
            <div>
                <img src="icons/Snow.png" style={{transform: "translateX(-0.3rem)", maxWidth: "115%", marginBottom: "1.1rem"}}/>
            </div>
        </div>
        : props.main == "Rain" ?
        <div>
            <div>
                <img src="icons/Rain.png" style={{transform: "translateX(1.5rem)", maxWidth: "83%" }}/>
            </div>
        </div>
        : props.main == "Clear" ?
        <div>
            <div>
                <img src="icons/Clear.png" style={{transform: "translateX(0.5rem)", maxWidth: "85%", marginBottom: "1.9rem"}}/>
            </div>
        </div>
        : props.main == "Clouds" ?
        <div>
            <div>
                <img src="icons/Clouds.png" style={{transform: "translateX(-0.7rem)", maxWidth: "125%"}}/>
            </div>
        </div>
        : props.main == "Thunderstorm" ?
        <div>
            <div>
                <img src="icons/Thunderstorm.png" style={{transform: "translateX(-0.5rem)", maxWidth: "130%", marginBottom: "1rem"}}/>
            </div>
        </div>
        : props.main == "Drizzle" ?
        <div>
            <div>
                <img src="icons/Rain.png" style={{transform: "translateX(-0.7rem)"}}/>
            </div>
        </div>
        :
        <div>
            <div>
                OOPS
            </div>
        </div>
    )
}

export default Icon;