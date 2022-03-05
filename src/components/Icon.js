import React from "react";
import { chooseIcon } from "../utils/utils";

function Icon(props){
    const image = chooseIcon(props.main)
    return(
        <div>
            {image}
        </div>
    )
}

export default Icon;