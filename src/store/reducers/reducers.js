import { GET_WEATHER_FORECAST } from "../actions/actionTypes";

const initialState = {
    json: {},
    isReady: false
}

export function reducer (state = initialState, action){
    switch (action.type){
        case GET_WEATHER_FORECAST:
            return {...state, json: action.payload, isReady: true};      
    }
    return state;
}
