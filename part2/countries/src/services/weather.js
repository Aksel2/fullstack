import axios from "axios";
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q='

const getCapitalWeather = (capital, countryShort, api_key) => {
    const requestUrl = `${baseUrl}${capital},${countryShort}&APPID=${api_key}`
    const request = axios.get(requestUrl)
    return request.then(response => response.data)
}


export default { getCapitalWeather }
