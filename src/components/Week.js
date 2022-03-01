import React, {Component} from "react";
import { connect } from "react-redux";
import {fetchWeatherData} from "../store/actions/actions";
import Day from "./Day";


class Week extends Component {
    
    componentDidMount(){
         this.props.fetchData("https://api.openweathermap.org/data/2.5/onecall?lat=53.893009&lon=27.567444&exclude=current,minutely,hourly,alerts&units=metric&lang=ru&appid=d1e621bf32fdae6d77225aaeb58e1c8f")
    }
    
    render(){
        return(
            <div>               
                    {this.props.isReady ? 
                    <div className="week"> {this.props.json.daily.filter(day => this.props.json.daily.indexOf(day) < 7).map((day, index) => {
                        let {dt,humidity,pop} = day;
                        let temp = day.temp.day;
                        let main = day.weather[0].main;
                        return(<Day key={index} index={index} date={dt} actualWeather={{main, temp, humidity, pop }}/>)})} 
                    </div>
                    :<p>Loading...</p> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        json: state.reducer.json,
        isReady: state.reducer.isReady
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(fetchWeatherData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Week);