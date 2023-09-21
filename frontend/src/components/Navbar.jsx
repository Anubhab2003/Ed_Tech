import logo from "../assets/logo.png";
import "../styles/navbar.scss";

function Navbar() {
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
}

export default Navbar;
