import React, { useState, createContext } from 'react';
import Context1 from './components/context1.jsx';
import { UseReducer } from './useReducerComponents/UseReducer.jsx';

export const StoreContext = createContext();


function App() {

  const [user, setUser] = useState("Jesse Hall");
  const [users, setUsers] = useState("Jesse Hall 2");

  const state = {
    user , 
    users,
    setUser
  }

  return (
    // <StoreContext.Provider value={state}>
    //   <Context1 />
    // </StoreContext.Provider>
    <UseReducer />
  );
}

export default App;