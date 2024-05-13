import { useEffect, useState } from "react";
import axios from "axios"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import {CityNotFound} from './cityNotFound'
import Loader from "./loader";
import LoadingCompleted from "./loadCompleted.jsx";
import InfiniteScroll from "react-infinite-scroll-component";


const WeatherCityListTable = ({searchCity})=>{

    
    const [cityData , setCityData] = useState([]);
    const [hasMore , setHasmore] = useState(true);
 
    // axios.get('https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/api/?disjunctive.cou_name_en&sort=name')

    useEffect(()=>{
        axios.get('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20')
        .then((response)=>{
            setCityData(response.data.results)
            // console.log("response = ", response.data.results);
        })
        .catch((err)=>{
            console.log("err = " , err);
        })
    },[])


    const fetchMoreData =  ()=>{
        if(cityData.length>79){
            setHasmore(false);
            return
        }
        setTimeout(()=>{
            axios.get(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20&offset=${cityData.length}`)
            .then((response)=>{
                setCityData((cityData)=>cityData.concat(response.data.results))
                // console.log("response fetchdata= ", cityData);
            })
            .catch((err)=>{
                console.log("err = " , err);
            })
        } , 600)
        
    }


    const finalData = cityData.filter((item)=>{
        return item.ascii_name && item.ascii_name.toLowerCase().indexOf(searchCity.toLowerCase()) == 0
    })


    return(
        <>
        <div className="container" >
            <InfiniteScroll
            dataLength={cityData.length}
            next={fetchMoreData}
            hasMore={hasMore}
            // loader={<Loader />}
            loader={finalData.length? <Loader /> :  <CityNotFound />}
            endMessage={finalData.length? <LoadingCompleted /> :  <CityNotFound />}
            >
        <table className="table border" >
            <thead>
                <tr>
                <th scope="col">S.No</th>
                <th scope="col">City name</th>
                <th scope="col">Country</th>
                <th scope="col">Population</th>
                <th scope="col">Time zone</th>
                </tr>
            </thead>
            <tbody>


                {finalData && finalData.map((item , index)=>{
                    return(
                    <tr key={index} className="cityRow">
                        <td>{index + 1}</td>
                        <Link
                            className="text-decoration-none cityLink"
                            to={{
                                pathname: `/weatherForecast`,
                                search : item.ascii_name,
                                state: { cityName: item.ascii_name } // Passing item.ascii_name as data
                            }}
                            
                            ><td> {item.ascii_name}</td></Link>
                        <td>{item.cou_name_en}</td>
                        <td>{item.population==0? 'Unknown' : item.population}</td>
                        <td>{item.timezone}</td> 
                    </tr>
                )})}
            
            </tbody>
            
        </table>
            </InfiniteScroll>
        </div>
        
        </>
    )
}

WeatherCityListTable.propTypes = {
    searchCity: PropTypes.string.isRequired // Assuming searchCity is a string
};

export default WeatherCityListTable;