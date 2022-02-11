import React, {Component} from "react";
import { connect } from "react-redux";
import {fetchWeatherData} from "../store/actions/actions";



class App extends Component {
    
    componentDidMount(){
         this.props.fetchData("https://api.openweathermap.org/data/2.5/forecast?lat=53.893009&lon=27.567444&units=metric&lang=ru&cnt=5&appid=d1e621bf32fdae6d77225aaeb58e1c8f")
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                <div>Weather Forecast</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        json: state.json
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(fetchWeatherData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);