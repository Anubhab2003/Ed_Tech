import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "../styles/home.scss";

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
        <nav className="navbar">
          <img src={logo} alt="dezire" className="logo-img" />
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>{" "}
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Dashboard
              </a>{" "}
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Courses
              </a>{" "}
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Labs
              </a>{" "}
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                {" "}
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <h1>no data</h1>
      </>
    );
  }
}

export default Home;
