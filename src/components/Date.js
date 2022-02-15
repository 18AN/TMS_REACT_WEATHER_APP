import React from "react";


  

function ActualDate(props){
    const date = new Date(props.date * 1000);
    const day = date.getDay();
    const actualDate = date.getDate().toLocaleString();
    function getWeekDay(date) {
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[date];
    }
    const actualday = getWeekDay(day);
    return(
        <div>
            <div>Date:{actualDate}</div>
            <div>Day:{actualday}</div>
        </div>
    )
}

export default ActualDate;