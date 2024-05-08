import { useState } from "react";


function App() {

  const [myArray , updateArray] = useState([]);  //[]   [1, 2, 3, 4, 5, 6]
  const [count, setCount] = useState(1); // Initialize count to 1

  const [counter , setCounter] = useState(1);

  const [name , setName] = useState('');

  const handleClick = () => {
    // Add the current count to the array and then increment count
    updateArray(prevArray => [...prevArray, count]);   // 1
    setCount(prevCount => prevCount + 1); //
  };

  const handleReset = () => {
    updateArray([]);
    setCount(1);
  }

  const minusCounter = ()=>{
    if(counter>1){
      setCounter(counter-1);
    }
  }

  const [shoppingList , setShoppingList] = useState([]);
  const [userName , setUserName] = useState('');
  const [qty , setQty] = useState(0);

  const submitData = ()=>{

    if(userName && qty){
      const obj = {
        userName : userName,
        qty : qty
      }
      setShoppingList([...shoppingList , obj ])
    }

  }

  return (
    <div className="App">
      <h2>Hello</h2>
      <button onClick={handleClick}>CLick me</button>
      <button onClick={handleReset}>Reset</button>
      {/* <p>Count = {count}</p> */}
      <ul>
        {/* {myArray && myArray.map((item) => (
          <li>{item}</li>
        ))} */}

        <p>All elements</p>
        {myArray? myArray.map(item => (
          <span>{item} </span>
        )) : ''}
       


        <p>Even numbers: </p>
        {myArray &&  myArray.filter(item => item % 2 === 0).map(item => (
          <span>{item} </span>
        ))}

        <p>Odd numbers: </p>
        {myArray? myArray.filter(x => x%2!==0).map(item => (
          <span>{item} </span>
        )) : ''}
      </ul>


          <button onClick={minusCounter}>Minus</button>
          <input type="text" value={counter} />
          <button onClick={()=>setCounter(counter+1)}>Plus</button>
       

          <br />

          <p>Write your name</p>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

          <p>Hello {name}</p>

          <h4>Add User in Shopping List</h4>

          {/* <form> */}
            <label>User name: </label>
            <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} />

            <label>Quantity: </label>
            <input type="text"  value={qty} onChange={(e)=>setQty(e.target.value)} />

            <button onClick={submitData}>Submit</button>
          {/* </form> */}

        

         

         <table style={{border : '2px solid #000'}}>
           <tr  style={{border : '2px solid #000'}}>
             <th>S.no</th>
             <th>Name</th>
             <th>Quantity</th>
           </tr>


            {shoppingList && shoppingList.map((item , index)=>(
              <tr>
                <td>{index +1}</td>
                <td>{item.userName}</td>
                <td>{item.qty}</td>
              </tr>
            ))}

         </table>

      
      
    </div>
  );
}

export default App;
