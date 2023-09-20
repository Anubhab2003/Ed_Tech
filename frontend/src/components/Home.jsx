import axios from "axios";
import { useEffect, useState } from "react";
import logo from '../assets/logo.png';


function Home() {
  const [data, setData] = useState("");
  useEffect(()=>{
    const getData = async () => {
        const res = await axios.get("http://localhost:3000/home");
        setData(res.data);
      };
      getData();
  }, [data])
  if(typeof data != 'undefined'){
    return(
        <>
            <nav>
            <img src={logo} alt="dezire"/>
            </nav>
        </>
    )
  }else{
    return(
        <>
            <h1>no data</h1>
        </>
    )
  }
}

export default Home;
