let api = "https://api.openweathermap.org/data/2.5/onecall";
let lat = "53.893009";
let lon = "27.567444";
let exclude = "current,minutely,hourly,alerts";
let units = "metric";
let lang = "ru";
const API_KEY = "d1e621bf32fdae6d77225aaeb58e1c8f";
export const request = `${api}?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&lang=${lang}&appid=${API_KEY}`;
