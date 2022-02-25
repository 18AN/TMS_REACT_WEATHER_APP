export const GET_WEATHER_FORECAST = "GET_WEATHER_FORECAST";

export function fetchWeatherDataSucces(json){
    return {
        type: GET_WEATHER_FORECAST,
        payload: json
    }
}

export function fetchWeatherData(url){
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(json => dispatch(fetchWeatherDataSucces(json)))
    }
}
