import axios from "axios";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import { TypeAnimation } from "react-type-animation";
import "../styles/home.scss";
import gifSrc from "../assets/Programmer.gif";

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
        <div className="main">
          <div>
            <h1>
              <span className="head-span">Love</span> with{" "}
              <span className="head-span">Code</span>
            </h1>

            <TypeAnimation
              className="animated-text"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "We provide best videos from youtube",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "We provide tutorials",
                1000,
                "We provide notes",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
            <a className="btn" href="#">Get started</a>
          </div>

          <img src={gifSrc} alt="gif" />
        </div>
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
