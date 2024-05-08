import PropTypes from 'prop-types';

const SearchCity = ({ searchCity , setSearchCity })=>{
    return(
        <>
        <div className="text-center pb-5 searchBoxCity" >
            <input type="text" name="" value={searchCity} onChange={(e)=>setSearchCity(e.target.value)} placeholder="Search city ..." className="text-start searchCity px-2 rounded-3 py-2" id="" />
        </div>
        </>
    )
}

SearchCity.propTypes = {
    searchCity: PropTypes.string.isRequired,
    setSearchCity: PropTypes.func.isRequired,
}


export default SearchCity;