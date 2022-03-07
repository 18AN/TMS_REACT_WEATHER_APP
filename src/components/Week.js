import React, {Component} from "react";
import { connect } from "react-redux";
import {fetchWeatherData} from "../store/actions/actions";
import { request } from "../utils/variables";
import { putPropsIntoDay } from "../utils/functions";

class Week extends Component {
    
    componentDidMount(){
         this.props.fetchData(request)
    }
    
    render(){
        return(
            <div>               
                {this.props.isReady ? 
                 <div className="week">
                    {putPropsIntoDay(this.props.json.daily)} 
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