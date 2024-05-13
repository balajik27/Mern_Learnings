import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'


import Clouds from '../assets/images/clouds.png';
import Clear from '../assets/images/clear.png';
import Rain from '../assets/images/rain.png';
import Snow from '../assets/images/snow.png';
import Mist from '../assets/images/mist.png';
import Drizzle from '../assets/images/drizzle.png';
import Wind from '../assets/images/wind.png';
import Humidity from '../assets/images/humidity.png';


export default function WeatherForecast() {
    const location = useLocation();
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cityName = location.search.slice(1);
        const apiKey = "7002d41d8e9106fbf16a0ee7d6b4d60b";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                        setWeatherData({name : "City data not found"})
                        console.log("City not found."); // Display in console
                    }
                    console.log("Hello error");

                    throw new Error("Failed to fetch weather data. Please try again later.");
                }
                console.log("Hello json");
                return response.json();
            })
            .then((data) => {
                setWeatherData(data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [location.search]);

    return (
        <div className="card">
            {error && <div className="error">{error}</div>}
            {weatherData && weatherData.name !== "City data not found" && (
                <div className="weather">
                    <img src={getWeatherIcon(weatherData.weather[0].main)} className="weather_icon" alt="" />
                    <h1 className="temp">{Math.round(weatherData.main.temp)}°C</h1>
                    <h2 className="city">{weatherData.name}</h2>
                    <div className="details">
                        <div className="col">
                            <img src={Humidity} alt="" />
                            <div className="">
                                <p className="humidity">{weatherData.main.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={Wind} alt="" />
                            <div className="">
                                <p className="wind">{weatherData.wind.speed} km/hr</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    </div>

                    <Link to="/" className='text-decoration-none px-3 mt-3 py-2 text-white btn  d-inline-block'>Back</Link>  
                </div>
            ) 
            
            }

            {weatherData && weatherData.name === "City data not found" && (
                    <>
                        <h3 className='fw-bold'>Weather data not found</h3>
                        <Link to="/" className='text-decoration-none px-3 mt-3 py-2 text-white btn  d-inline-block'>Back</Link>
                    </>
            )}
            
        </div>
    );
}

function getWeatherIcon(weatherType) {
    switch (weatherType) {
        case "Clouds":
            return Clouds;
        case "Clear":
            return Clear;
        case "Rain":
            return Rain;
        case "Snow":
            return Snow;
        case "Mist":
            return Mist;
        case "Drizzle":
            return Drizzle;
        default:
            return "";
    }
}
