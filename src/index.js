import React from "react";
import {applyMiddleware, createStore} from "redux";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/App.js";
import thunk from "redux-thunk"


const initialState = {
    weatherData: ""
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_WEATHER_FORECAST":
            return {...state, weatherData: action.payload}
    }
    return state;
}

export const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));