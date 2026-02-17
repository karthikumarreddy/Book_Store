import logo from "../assets/29302.png";
import "../styles/Navbar.styles.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container">
      <Link to="/" className="l2">
      <div className="nav-container">
        <img src={logo} alt="logos" className="logo" />
        <span className="brand-name">BookStore</span>
      </div></Link>
      
      <div className="links">
        <Link to="/" className="l1">Home</Link>
        <Link to="/" className="l1">Search</Link>
        <Link to="/" className="l1">About</Link>
        <Link to="/" className="l1">FAQs</Link>
        <Link to="/" className="l1">Cart</Link>
      </div>
    </div>
  );
}
export { Navbar };
