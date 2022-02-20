import React from "react";


  

function ActualDate(props){
    const date = new Date(props.date * 1000);
    const day = date.getDay();
    const actualDate = date.getDate().toLocaleString();
    function getWeekDay(date) {
        let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        return days[date];
    }
    const actualday = getWeekDay(day);
    return(
        <div className="actual-week-day">
            <div className="actual-day">{actualday}</div>
            <div className="actual-date">{actualDate}</div>
        </div>
    )
}

export default ActualDate;