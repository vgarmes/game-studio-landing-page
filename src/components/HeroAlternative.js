import React, { useState, useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  const [scrollAmount, setScrollAmount] = useState(0)

  const handleScroll = () => {
    setScrollAmount(window.scrollY)
    console.log(`${window.scrollY}px`)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className="hero">
        <div className="wrapper">
          <div className="hero__text">
            <h2 className="hero-title">
              we are
              <br />
              supercool games
            </h2>
            <a href="#" className="btn btn-hero">
              Explore
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Hero
