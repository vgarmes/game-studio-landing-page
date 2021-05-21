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

      <main className="section hero-about">
        <div className="wrapper">
          <h3>We turn bold ideas into great games</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos
            nulla cupiditate est unde minima aliquam deleniti ea ut nam adipisci
            molestias ducimus ipsa aspernatur maiores dolore, labore amet
            quisquam!<br></br>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fuga
            et inventore eius reprehenderit itaque modi minus veniam, excepturi
            porro corrupti officia? A impedit rem cumque facere dolorem aperiam
            eaque!
          </p>
        </div>
      </main>
    </>
  )
}

export default Hero
