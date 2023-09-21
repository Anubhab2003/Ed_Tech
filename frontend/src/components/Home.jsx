import axios from "axios";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/home");
      setData(res.data);
    };
    getData();
  }, [data]);

  if (typeof data != "undefined") {
    return (
      <>
        <Navbar />
        <div className="heading">
          <h1>
            <span>Love</span> with <span>Code</span>
          </h1>
        </div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "We produce food for Mice",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "We produce food for Hamsters",
            1000,
            "We produce food for Guinea Pigs",
            1000,
            "We produce food for Chinchillas",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        /> 
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
