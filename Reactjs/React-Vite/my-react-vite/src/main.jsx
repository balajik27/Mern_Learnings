// import React from 'react'
import './assets/css/style.css';
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import Game from './components/App.jsx'
// import TicTacToe from './components/TicTacToe.jsx'
// import SearchBar from './searchComponent/searchBar.jsx'
// import FilterableProductTable from './filterProductComponents/filterableProductTable.jsx'
// import InfiniteScrollExample1 from './infinteScrollComponents/infiniteScrollExample1';
import Weather from './weatherAPIComponents/weather';
const PRODUCTS = [
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
];

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    {/* <Game /> */}
    {/* <TicTacToe /> */}
  {/* <SearchBar /> */}
  {/* <FilterableProductTable products = {PRODUCTS} /> */}
  {/* <InfiniteScrollExample1 /> */}
  <Weather />
  </>
  
  // </React.StrictMode>,
)
