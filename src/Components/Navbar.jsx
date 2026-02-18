import { useState } from "react";
import logo from "../assets/29302.png";
import "../styles/Navbar1.styles.jsx";

import {
  Container,
  Link1,
  Link2,
  Logo,
  Navcontainer,
  Links,
  Bookname,
  Menu,
} from "../styles/Navbar1.styles.jsx";

function Navbar() {
  const [toggle, setToggle] = useState(true);

  return (
    <Container>
      <Link1 to="/">
        <Navcontainer>
          <Logo src={logo} alt="logo" />
          <Bookname>BookStore</Bookname>
        </Navcontainer>
      </Link1>
      <Menu onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <i className="fa-solid fa-xmark" />
        ) : (
          <i className="fa-solid fa-bars" />
        )}
      </Menu>
      <Links $open={toggle}>
        <Link2 to="/">Home</Link2>
        <Link2 to="/search">Search</Link2>
        <Link2 to="/about">About</Link2>
        <Link2 to="/faqs">FAQs</Link2>
        <Link2 to="/cart">Cart</Link2>
      </Links>
    </Container>
  );
}

export { Navbar };
