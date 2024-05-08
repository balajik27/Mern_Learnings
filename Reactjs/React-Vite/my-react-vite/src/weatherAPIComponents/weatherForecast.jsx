
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function WeatherForecast() {
    const location = useLocation();
    console.log('Location:', location); // Log location object
    const cityName = (location.search).slice(1);
    console.log('City Name:', cityName); // Log cityName value

    const apiKey = "7002d41d8e9106fbf16a0ee7d6b4d60b";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    useEffect(()=>{
        fetch(`${apiUrl}${cityName}&appid=${apiKey}`)
        .then((response)=>{
            if(response.ok == false){
                throw new Error("Invalid City!");
            }
            return response.json()
        })
        .then((response)=>{
                console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <div>
            <p>Weather Forecast for {cityName}</p>

            <Link to="/">Back</Link>
           
        </div>
    );
}


