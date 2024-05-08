import {FaSearch} from "react-icons/fa";
import '../assets/css/searchBar.css';
import {useState} from 'react';

export default function Search({ setResults , setInput , input , handleChange}){
    // const [input , setInput] = useState('');

    // const fetchData = (value) => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.json())
    //     .then(json=>{
    //         const results = json.filter(user=>{
    //             return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
    //         })
    //         console.log(results);
    //         setResults(results);
    //     });
    // }

    // const handleChange = (value) =>{
    //     setInput(value);
    //     fetchData(value);
    // }

    return(
        <div className="input_wrapper">
            <FaSearch id="search_icon" />
            <input type="text" placeholder="Type to search..." value={input} onChange={(e)=>handleChange(e.target.value)} name="" id="" />
        </div>
    )
}