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
                <div>
                    
                    {this.props.isReady ? 
                    <div> {this.props.json.daily.map((day, index) => {
                        let {dt,humidity,pressure} = day;
                        let temp = day.temp.day;
                        return(<Day key={index} date={dt} actualWeather={{temp, humidity, pressure }}/>)})} 
                    </div>
                    :<p>Loading...</p> }
                </div>
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