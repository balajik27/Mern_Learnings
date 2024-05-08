import { useState } from "react";
import SearchCity from "./searchCity";
import WeatherCityListTable from "./weatherCityListTable";
import WeatherForecast from "./weatherForecast";

import { BrowserRouter  as Router , Routes , Route } from 'react-router-dom'



import '../assets/css/weather.css';
export default function Weather(){


    const [searchCity , setSearchCity] = useState('');

 

    return(
        <>

        <Router>
            <Routes>
                <Route path="/" element={
                    <>           
                     <div className="text-center my-5">
                            <p className="fw-bolder h1">Weather App</p>
                        </div>
                        <SearchCity  searchCity = {searchCity} setSearchCity={setSearchCity}  />
                        <WeatherCityListTable searchCity={searchCity} />
                    </>
                } />
                <Route path="/weatherForecast" element={
                   <WeatherForecast />
                } />
          </Routes>
        </Router>
        
        
        </>
    )
}