import React from "react";
import { selectImage } from "../utils/functions";

function Pop(props){
    let main = props.main;
    let popColor = selectImage(main)
    return(
        <div style={{display: "flex"}}>
            <img src={`icons/umbrella-${popColor}.png`} className="umbrella"/>
            <div className={`pop-${popColor}`}>
                {`${Math.round(props.pop * 100)} %`}
            </div>
        </div>
        
    )
}

export default Pop;