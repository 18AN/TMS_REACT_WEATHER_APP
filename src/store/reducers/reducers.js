import { GET_WEATHER_FORECAST } from "../actions/actions";

const initialState = {
    json: {},
    isReady: false
}

export function reducer (state = initialState, action){
    console.log(action.payload)
    switch (action.type){
        case GET_WEATHER_FORECAST:
            return {...state, json: action.payload, isReady: true};      
    }
    return state;
}