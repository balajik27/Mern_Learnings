import PropTypes from 'prop-types';
import {FaSearch , FaArrowRight} from "react-icons/fa";
import { Link } from 'react-router-dom'


const SearchCity = ({ searchCity , setSearchCity })=>{
    

    const handleClick = ()=>{
        if(searchCity.trim().length==0){
            console.log("empty");
            return
        }
    }

    return(
        <>
        <div className="text-center pb-5 searchBoxCity d-flex justify-content-center align-items-center" >
            <div className=" d-flex align-items-center searchBox rounded-3">
                <div className="ps-3">
                    <FaSearch id="search_icon" className='' />
                </div>
            <input type="text" name="" value={searchCity} onChange={(e)=>setSearchCity(e.target.value)} placeholder="Search city ..." className="text-start border-0 searchCity px-2 py-2" id="" />
                <Link onClick={handleClick} to={{
                    pathname : `/weatherForecast`,
                    search : `?${searchCity}`,
                    
                }} className="searchBtn my-1 me-1 px-4 rounded-3">
                    <FaArrowRight className='' />
                </Link>
            </div>
        </div>
        </>
    )
}

SearchCity.propTypes = {
    searchCity: PropTypes.string.isRequired,
    setSearchCity: PropTypes.func.isRequired,
}


export default SearchCity;