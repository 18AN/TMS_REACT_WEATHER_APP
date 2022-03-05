import React from "react";
import { getWeekDay } from "../utils/utils"; 

function ActualDate(props){
    const date = new Date(props.date * 1000);
    const day = date.getDay();
    const actualDate = date.getDate().toLocaleString();
    
    const actualday = getWeekDay(day);
    return(
        <div className="actual-week-day">
            <div className="actual-day">{actualday}</div>
            <div className="actual-date">{actualDate}</div>
        </div>
    )
}

export default ActualDate;