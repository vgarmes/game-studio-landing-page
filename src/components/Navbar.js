import React from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo_192x192.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-desktop">
        supercool games
      </Link>
      <Link to="/" className="logo-phone">
        <img src={logo} alt="supercool games" />
      </Link>
      <ul>
        <li>
          <Link to="/" className="nav__link" activeClassName="active-button">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/games"
            className="nav__link"
            activeClassName="active-button"
          >
            Games
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="nav__link"
            activeClassName="active-button"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/careers"
            className="nav__link"
            activeClassName="active-button"
          >
            Careers
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
