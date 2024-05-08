export default function SearchBar({checkBox , filterText , setFilterText , setCheckBox}){
    return(
        <>
    <div className="search_bar_box">
        <input type="text" className="search_box" value={filterText} onChange={(e)=>setFilterText(e.target.value)} placeholder="Search.." name="" id="" />
        <input type="checkbox" name="" value={checkBox} onChange={(e)=>setCheckBox(e.target.checked)} id="" />{' '}Only show products in stock

    </div>
      
        </>
    )
}