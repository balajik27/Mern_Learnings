import React, { useContext } from 'react';
import { StoreContext } from '../App'; // Assuming App.js and Context1.js are in the same folder

export default function Context1() {
  const user = useContext(StoreContext);

  return (
    <>
      <h1>Hello, {user.user }</h1>
      <h1>Hello, {user.users }</h1>

      <button onClick={()=>user.setUser(user.user=='Jesse Hall'? "Balaji": 'Jesse Hall')}> Change Name</button>
    </>
  );
}