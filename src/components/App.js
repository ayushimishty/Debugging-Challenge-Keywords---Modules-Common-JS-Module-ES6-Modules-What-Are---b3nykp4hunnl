import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <div className="ball">
      <h1 className="count" onDoubleClick={() => { alert("cant edit it") }}>{count}</h1>
      <button className='increment-button' onClick={() => { setCount(count + 1) }}>Increment</button>
    </div>
  )
}


export default App;
