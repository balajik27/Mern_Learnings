import '../assets/css/searchBar.css';
import Search from './search.jsx';
import SearchResults from './searchResults.jsx';
import { useState } from 'react';


export default function SearchBar(){

    const [results , setResults] = useState([]);
    const [input , setInput] = useState('');

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(json=>{
            const results = json.filter(user=>{
                return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
            })
            console.log(results);
            setResults(results);
        });
    }

    const handleChange = (value) =>{
        setInput(value);
        fetchData(value);
    }

    return(
        <>
            <section id="search_bar">
                <div className="search_bar_container">
                    <Search setInput={setInput} input={input} handleChange={handleChange} setResults = {setResults} />
                    <SearchResults results = {results} handleChange={handleChange} />
                </div>
            </section>
        </>
    )
}