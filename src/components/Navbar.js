import React from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo_192x192.png"

const Navbar = () => {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Games", url: "/games" },
    { title: "About", url: "/about" },
    { title: "Career", url: "/careers" },
  ]
  return (
    <nav className="navbar">
      <Link to="/" className="logo-desktop">
        supercool games
      </Link>
      <Link to="/" className="logo-phone">
        <img src={logo} alt="supercool games" />
      </Link>
      <ul>
        {navLinks.map(({ title, url }, index) => {
          return (
            <li key={index}>
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

      <button class="nav-toggle" aria-label="toggle navigation">
        <span class="hamburger"></span>
      </button>
      <div class="nav-phone">
        <div id="nav__close-layer"></div>
        <div class="nav__sidebar">
          <ul class="nav__list">
            <li class="nav__item">
              <a class="nav__link" href="#about">
                <h1>About me</h1>
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#portfolio">
                <h1>Projects</h1>
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#contact">
                <h1>Contact</h1>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
