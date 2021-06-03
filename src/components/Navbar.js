import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo_192x192.png"

const Navbar = () => {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Games", url: "/games" },
    { title: "About", url: "/about" },
    { title: "Career", url: "/careers" },
  ]

  const [openSidenav, setOpenSidenav] = useState(false)

  return (
    <nav className={openSidenav ? `navbar ${"sidebar-open"}` : "navbar"}>
      <Link to="/" className="logo-desktop">
        supercool games
      </Link>
      <Link to="/" className="logo-phone">
        <img src={logo} alt="supercool games" />
      </Link>

      <ul className="nav__list">
        {navLinks.map(({ title, url }, index) => {
          return (
            <li key={index} className="nav__item">
              <Link
                to={url}
                className="nav__link"
                activeClassName="active-button"
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>

      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={() => setOpenSidenav(!openSidenav)}
      >
        <span className="hamburger"></span>
      </button>
      <div className="nav-phone">
        <div className="nav__sidebar">
          <ul className="sidebar__list">
            {navLinks.map(({ title, url }, index) => {
              return (
                <li key={index} className="sidebar__item">
                  <Link
                    to={url}
                    className="sidebar__link"
                    onClick={() => setOpenSidenav(false)}
                  >
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
