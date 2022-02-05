import React, { Component } from "react";
import {connect} from "react-redux"
import { loadData } from "../store/actions.js";
import Day from "./Day.js";


class Week extends Component {
    constructor(){
        super()

        this.onChangeButton = this.onChangeButton.bind(this)
    }
    
    onChangeButton(){
        const dispatch = this.props.dispatch;
        dispatch(loadData)
    }
    render (){
        console.log(this.props)
        return (
            <div>
                <button onChange={this.onChangeButton}>Get Weather Forecast</button>
                <Day />
            </div>
        );
    }
}
const putStateToProps = (state) => {
    return {
        weatherData: state.weatherData
    }
}
const WrappedWeekComponent = connect(putStateToProps)(Week)
export default WrappedWeekComponent;