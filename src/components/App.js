
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

  let temp = 0;
  let [count,setCount] = useState(0);
  temp = temp+count;
  function sum(e){
    setCount(e.target.value)
  }
  return (
    <div>
        <h1>Sum Calculator</h1>
        <input type="number" onChange={sum(e)} value={count}></input>
        <p>Sum: {temp}</p>
    </div>
  )
}

export default App
