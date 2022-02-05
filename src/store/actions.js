export const GET_WEATHER_FORECAST = "GET_WEATHER_FORECAST";

export const putData = (dataFromApi) => {
    return {
        type: GET_WEATHER_FORECAST,
        payload: dataFromApi
    };
};

export const loadData = () => (dispatch, getState) => {
    console.log(getState());
    fetch("https://dark-sky.p.rapidapi.com/53%C2%B053%E2%80%B259%E2%80%B3,27%C2%B034%E2%80%B200%E2%80%B3?units=auto&lang=ru", {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "dark-sky.p.rapidapi.com",
		    "x-rapidapi-key": "f5b1119e86msh010ac242e61225dp14d0a5jsnd4e6704e1ca9"
	}
})
.then(response => response.json())
.then(json => {
    dispatch(putData(json));
})
.catch(err => {
	console.error(err);
});
}