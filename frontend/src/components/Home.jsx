import axios from "axios";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import Navbar from "./Navbar";

function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/home");
      setData(res.data);
    };
    getData();
  }, [data]);

  if (typeof data.main != "undefined") {
    return (
      <>
        <Navbar />
      </>
    );
  } else {
    return (
      <>
        <NotFound />
      </>
    );
  }
}

export default Home;
