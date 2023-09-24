import axios from "axios";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import { TypeAnimation } from "react-type-animation";
import "../styles/home.scss";
import gifSrc from "../assets/Programmer.gif";
import Footer from "./Footer";
import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import GetStarted from "./GetStarted";

function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000");
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
            <Link  className="btn" to="/user/getStarted">Get Started</Link>
            <Routes>
              <Route exact path="/user/getStarted" element={<GetStarted/>}/>
            </Routes>
            
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
              Explore our library of instructive tutorials that cater to all
              skill levels. From beginner-friendly primers to advanced
              techniques, you all find the guidance you need to thrive in the
              coding universe.
            </div>
          </div>
          <div className="card">
            <div className="card-heading">📺 Best YouTube Videos:</div>
            <div className="card-body">
              We have scoured the vast realm of YouTube to bring you the finest
              coding videos. Discover insightful lectures, practical
              demonstrations, and engaging talks from coding luminaries. With
              our selection, you all never miss out on the latest trends and
              innovations.
            </div>
          </div>
          <div className="card">
            <div className="card-heading">🌟 Community-Driven:</div>
            <div className="card-body">
              Join our vibrant community of coders, learners, and enthusiasts.
              Share your knowledge, seek advice, and collaborate on exciting
              projects. Dezire is more than a platform; it is a supportive
              ecosystem.
            </div>
          </div>
          <div className="card">
            <div className="card-heading">🌐 Accessible Anywhere: </div>
            <div className="card-body">
              Access Dezire from your desktop, tablet, or mobile device. We are
              committed to ensuring your coding resources are always within
              reach, no matter where you are.
            </div>
          </div>
          <div className="card">
            <div className="card-heading">💡 Stay Updated: </div>
            <div className="card-body">
              Stay at the forefront of coding with our regularly updated
              content. Our team is dedicated to keeping you informed about the
              latest developments in the tech world.
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="outerdiv">
            <div className="innerdiv">
              <div className="div1 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name">Daniel Clifford</p>
                    <p className="designation">Verified Graduate</p>
                  </div>
                </div>
                <div className="review">
                  <h4>
                    I received a job offer mid-course, and the subjects I
                    learned were current, if not more so, in the company I
                    joined. I honestly feel I got every penny’s worth.
                  </h4>
                  <p>
                    “ I was an EMT for many years before I joined the bootcamp.
                    I’ve been looking to make a transition and have heard some
                    people who had an amazing experience here. I signed up for
                    the free intro course and found it incredibly fun! I
                    enrolled shortly thereafter. The next 12 weeks was the best
                    - and most grueling - time of my life. Since completing the
                    course, I’ve successfully switched careers, working as a
                    Software Engineer at a VR startup. ”
                  </p>
                </div>
              </div>

              <div className="div2 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name">Jonathan Walters</p>
                    <p className="designation">Verified Graduate</p>
                  </div>
                </div>
                <div className="review">
                  <h4>The team was very supportive and kept me motivated</h4>
                  <p>
                    “ I started as a total newbie with virtually no coding
                    skills. I now work as a mobile engineer for a big company.
                    This was one of the best investments I’ve made in myself. ”
                  </p>
                </div>
              </div>
              <div className="div3 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name dark">Kira Whittle</p>
                    <p className="designation dark">Verified Graduate</p>
                  </div>
                </div>
                <div className="review dark">
                  <h4>Such a life-changing experience. Highly recommended!</h4>
                  <p>
                    “ Before joining the bootcamp, I’ve never written a line of
                    code. I needed some structure from professionals who can
                    help me learn programming step by step. I was encouraged to
                    enroll by a former student of theirs who can only say
                    wonderful things about the program. The entire curriculum
                    and staff did not disappoint. They were very hands-on and I
                    never had to wait long for assistance. The agile team
                    project, in particular, was outstanding. It took my learning
                    to the next level in a way that no tutorial could ever have.
                    In fact, I’ve often referred to it during interviews as an
                    example of experience. It certainly helped me land a job as
                    a full-stack 100% recommend! ”
                  </p>
                </div>
              </div>
              <div className="div4 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name dark">Jeanette Harmon</p>
                    <p className="designation dark">Verified Graduate</p>
                  </div>
                </div>
                <div className="review dark">
                  <h4>An overall wonderful and rewarding experience</h4>
                  <p>
                    “ Thank you for the wonderful experience! I now have a job I
                    really enjoy, and make a good living while doing something I
                    love. ”
                  </p>
                </div>
              </div>
              <div className="div5 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name">Patrick Abrams</p>
                    <p className="designation">Verified Graduate</p>
                  </div>
                </div>
                <div className="review">
                  <h4>
                    Awesome teaching support from TAs who did the bootcamp
                    themselves. Getting guidance from them and learning from
                    their experiences was easy.
                  </h4>
                  <p>
                    “ The staff seem genuinely concerned about my progress which
                    I find really refreshing. The program gave me the confidence
                    necessary to be able to go out in the world and present
                    myself as a capable junior developer. The standard is above
                    the rest. You will get the personal attention you need from
                    an incredible community of smart and amazing people. ”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
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
