import axios from "axios";
import { useEffect, useState } from "react";
import process from "dotenv";

{
  process.env.NODE_ENV === "development";
}

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
            <h1>{data.message}</h1>
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
