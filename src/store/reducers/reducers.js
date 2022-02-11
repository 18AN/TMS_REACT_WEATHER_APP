import { GET_WEATHER_FORECAST } from "../actions/actions";

const initialState = {
    json: []
}

export function reducer (state = initialState, action){
    switch (action.type){
        case GET_WEATHER_FORECAST:
            return {...state, json: action.payload};      
    }
    return state;
}