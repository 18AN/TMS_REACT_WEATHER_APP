import React from "react";
import Day from "../components/Day";

export function putPropsIntoDay(array){
    let filteredArray = array.filter(day => array.indexOf(day) < 7)
    let mappedArray = filteredArray.map((day, index) => {
        let {dt,humidity,pop} = day;
        let temp = day.temp.day;
        let main = day.weather[0].main;
        return(<Day key={index} index={index} date={dt} actualWeather={{main, temp, humidity, pop }}/>)
    })
    return mappedArray;
}

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

export function selectColor(name){
         let color 
        if(name == 'Clear'){
            color = "#E6DF95";
        }else if( name == 'Clouds'){
            color = "#4DB0D3";
        }else if( name == 'Rain'){
            color = "#2B8BAD";
        }else if( name == 'Drizzle'){
            color = "#2B8BAD";
        }else if( name == 'Thunderstorm'){
            color = "#0E2E3A";
        }else if( name == 'Snow'){
            color = "#BCE1EF";
        }
        return color
    }
export function selectCircle(name){
        let style;
        if(name == 'Clear'){
            style = "Blue";
        }else if(name == 'Clouds'|| name == 'Rain'|| name == 'Drizzle'|| name == 'Thunderstorm'){
            style = "Yellow";
        }else if(name == 'Snow'){
            style = "Dark-blue"
        }
        return style;
    }

export function selectTemperatureColor(name){
        let color 
        if(name == 'Clear'){
           color = "#4DB0D3";
        }else if( name == 'Clouds'){
           color = "#E6DF95";
        }else if( name == 'Rain'){
           color = "#E6DF95";
        }else if( name == 'Drizzle'){
            color = "#2B8BAD";
        }else if( name == 'Thunderstorm'){
           color = "#E6DF95";
        }else if( name == 'Snow'){
           color = "#0E2E3A";
        }
        return color
    }