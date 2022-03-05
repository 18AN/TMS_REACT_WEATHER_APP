import React from "react";

export function selectImage(text){
        let color = "";
        if(text=='Clear' || text=='Snow'){
            color = "dark";
        }else if( text == 'Rain'||text =='Clouds'||text =='Drizzle'||text =='Thunderstorm'){
            color = 'light';
        }
        return color
    }

export function chooseIcon(name){
        return(
            <img src={`icons/${name}.png`} className={`${name}`}/>
        )
    }

export function getWeekDay(date) {
        let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        return days[date];
    }