import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        supercool games
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
          <Link to="/" className="nav__link" activeClassName="active-button">
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
