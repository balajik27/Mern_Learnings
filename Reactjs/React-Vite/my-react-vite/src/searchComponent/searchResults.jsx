export default function SearchResults({ results , handleChange}) {
    return(
        <>
            <div className="results_list">
               {
                   results.map((result , index)=>
                        <div className="search_result" onClick={(e)=>handleChange(e.target.textContent)} key={index}>{result.name}</div>
                   )
               }
            </div>
        </>
    )
}