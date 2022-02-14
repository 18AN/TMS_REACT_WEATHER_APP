import React from "react";

function Date(props){
    const date = new Date(props.date)
    return(
        <div>
            <div>Date:{date}</div>
        </div>
    )
}

export default Date;