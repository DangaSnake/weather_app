import { useEffect } from "react";
import "./current-weather.css"

const CurrentWeather = ({ data }) => {
    useEffect(() => {  
        const weatherIconElement = document.getElementById("weather-icon");
        if (weatherIconElement) {
            weatherIconElement.classList.remove('weather-icon-animation');
            setTimeout(() => {
                weatherIconElement.classList.add('weather-icon-animation');
              }, 100);
        }

    }, [data])

    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <div className="weather-icon-box">
                <img alt="weather" id="weather-icon" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
                </div>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°F</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like:</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°F</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind:</span>
                        <span className="parameter-value">{data.wind.speed} mph</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity:</span>
                        <span className="parameter-value">{data.main.humidity} %</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure:</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default CurrentWeather;