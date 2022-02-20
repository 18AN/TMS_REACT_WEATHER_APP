import React from "react";

function Icon(props){
    return(props.main == "Snow" ?
        <div>
            <div>
                <img src="icons/Snow.png"/>
            </div>
        </div>
        :
        <div>
            <div>
                <img src="icons/Snow.png"/>
            </div>
        </div>
    )
}

export default Icon;