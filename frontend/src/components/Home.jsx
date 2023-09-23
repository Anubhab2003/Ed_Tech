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
            <a className="btn" href="#">
              Get started
            </a>
          </div>

          <img src={gifSrc} alt="gif" />
        </div>
        <main className="intro">
          <h2>Welcome to Dezire: Your Coding Companion</h2>
          <p>
            Are you eager to embark on an exciting coding journey? Look no
            further than Dezire – your ultimate destination for comprehensive
            notes, enlightening tutorials, and handpicked YouTube videos to fuel
            your passion for coding. Whether you are a seasoned developer
            seeking to refine your skills or a budding coder taking your first
            steps, Dezire is here to empower and inspire you.
          </p>
        </main>
        <section className="cards">
          <div className="card">
            <div className="card-heading">📘 In-Depth Notes:</div>
            <div className="card-body">
              Dive into a treasure trove of meticulously crafted notes covering
              a wide range of programming languages, frameworks, and concepts.
              Our expertly curated content simplifies complex topics, making
              learning a breeze.
            </div>
          </div>
          <div className="card">
            <div className="card-heading">🎥 Top-Quality Tutorials:</div>
            <div className="card-body">
            Explore our library of instructive tutorials that cater to all skill levels. From beginner-friendly primers to advanced techniques, you all find the guidance you need to thrive in the coding universe.
            </div>
          </div>
          <div className="card">
            <div className="card-heading">📺 Best YouTube Videos:</div>
            <div className="card-body">
            We have scoured the vast realm of YouTube to bring you the finest coding videos. Discover insightful lectures, practical demonstrations, and engaging talks from coding luminaries. With our selection, you all never miss out on the latest trends and innovations.
            </div>
          </div>
          <div className="card">
            <div className="card-heading">🌟 Community-Driven:</div>
            <div className="card-body">
            Join our vibrant community of coders, learners, and enthusiasts. Share your knowledge, seek advice, and collaborate on exciting projects. Dezire is more than a platform; it is a supportive ecosystem.
            </div>
          </div>
          <div className="card">
            <div className="card-heading">🌐 Accessible Anywhere: </div>
            <div className="card-body">
            Access Dezire from your desktop, tablet, or mobile device. We are committed to ensuring your coding resources are always within reach, no matter where you are.
            </div>
          </div>
          <div className="card">
            <div className="card-heading">💡 Stay Updated: </div>
            <div className="card-body">
            Stay at the forefront of coding with our regularly updated content. Our team is dedicated to keeping you informed about the latest developments in the tech world.
            </div>
          </div>
        </section>
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
