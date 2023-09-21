import img from "../assets/404.png";
import Navbar from "./Navbar";

function NotFound() {
  return (
    <>
      <Navbar />
      <img
        src={img}
        alt="404 not found"
        style={{
          width: "40%",
          marginLeft: "28%",
          marginTop: "1em",
        }}
      />
    </>
  );
}

export default NotFound;
