import '../assets/css/filterProduct.css';
import SearchBar from './searchBar';
import ProductTable from './productTable';
import { useState } from 'react';
export default function FilterableProductTable({products}){

    const [filterText , setFilterText] = useState('');
    const [checkBox , setCheckBox] = useState(false);
    return(
        <>
        <div className="main_outer_card">
            <SearchBar filterText={filterText} setFilterText = {setFilterText} checkBox={checkBox} setCheckBox={setCheckBox} />
            <ProductTable products={products} filterText={filterText} checkBox={checkBox} />
        </div>
        
        </>
    )
}