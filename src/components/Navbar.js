import React from "react"

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" class="logo">
        Logo
      </a>
      <ul>
        <li>
          <a href="#" class="active-button">
            Home
          </a>
        </li>
        <li>
          <a href="#">Games</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
