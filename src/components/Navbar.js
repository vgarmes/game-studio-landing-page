import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [scrollAmount, setScrollAmount] = useState(0)
  const navRef = useRef(null)

  const onScroll = () => {
    setScrollAmount(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <nav className="navbar" ref={navRef}>
      <a href="#" className="logo">
        supercool games
      </a>
      <ul>
        <li>
          <Link to="/" className="nav__link active-button">
            Home
          </Link>
        </li>
        <li>
          <Link to="/games" className="nav__link">
            Games
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__link">
            About
          </Link>
        </li>
        <li>
          <Link to="/careers" className="nav__link">
            Careers
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
