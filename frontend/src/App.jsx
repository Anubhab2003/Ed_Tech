import { useState } from 'react'
import './App.css';
import axios from "axios";

function App() {
  const [count, setCount] = useState("");
  const getMessage = async()=>{
    const res = await axios.get('http://localhost:3000/home');
    setCount(res.data);
  }
  return (
    <>
      <div>
       <button onClick={getMessage}>click</button>
       <h1>{count.message}</h1>
    
      </div>
    </>
  )
}

export default App
