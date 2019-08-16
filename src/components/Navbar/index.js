import React, { useState } from "react";
import NavbarContainer from "./../NavbarContainer";
import { Link, useRouter } from "./../../util/router.js";
import SectionButton from "./../SectionButton";
import { useAuth } from "./../../util/auth.js";
import "./styles.scss";

function Navbar(props) {
  const auth = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img className="image" src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/about">
              Om oss
            </Link>
            <Link className="navbar-item" to="/pricing">
              Tjänster
            </Link>
            <Link className="navbar-item" to="/faq">
              Kontakta oss
            </Link>

          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
