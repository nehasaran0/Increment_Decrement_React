



////////////////------------increment----decrement------------------////////////////////////



import React from 'react';
import { useState } from 'react/cjs/react.development';

function App(){

  const[count, setCount]= useState(0);

  const Increment =()=>{
    setCount(count + 1);
  };

  const Decrement =()=>{
    if(count>0){
    setCount(count - 1);
    }else{
      alert("sorry ,we can't go more")
      setCount(0);
    }
  };

  return(
      <div>
      <h1>{count}</h1>
      <button className="btn" onClick={Increment}>INCREMENT</button>
      <button onClick={Decrement}>DECREMENT</button>
     
      </div>

  );
  
};
export default App;

















