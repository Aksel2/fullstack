import { useState, useEffect } from "react";
import weather from "../services/weather";

const SingleCountry = ({ name, capital, area, languages, flag, flagAlt, countryShort, api_key }) => {

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        weather
            .getCapitalWeather(capital, countryShort, api_key)
            .then(resData => {
                setWeatherData(resData)
            })
    }, [])

    if (weatherData === null) {
        return 'Fetching...';
    }

    const spokenLanguages = Object.values(languages);
    const kTemp = weatherData.main.temp;
    const imageLoc = `https://openweathermap.org/img/wn/${weatherData?.weather?.[0].icon}@2x.png`
    const imageAlt = weatherData?.weather?.[0].description
    const convertKtoC = Ktemp => Math.round((Ktemp - 273.15)*100) / 100

    return (
        <div>
            <h1>{name}</h1>
            <div>capital {capital}</div>
            <div>area {area}</div>
            <h3>languages:</h3>
            <ul>
                {spokenLanguages.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <img className="flag" src={flag} alt={flagAlt} />
            <h2>Weather in {capital}</h2>
            <div>temperature <b>{convertKtoC(kTemp)}</b> Celcius</div>
            <img src={imageLoc} alt={imageAlt}/>
            <div>wind <b>{weatherData.wind.speed}</b> m/s</div>
        </div>
    )
}

export default SingleCountry;