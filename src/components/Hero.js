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
    <header className="hero">
      <section className="parallax">
        <StaticImage
          src="../assets/images/parallax/layer06_Rocks.png"
          alt="rocks"
          style={{ position: "absolute" }}
          className="parallax-img"
          imgStyle={{
            top: `${0.25 * scrollAmount}px`,
          }}
          placeholder="none"
          layout="fullWidth"
        ></StaticImage>

        <StaticImage
          src="../assets/images/parallax/layer04_Clouds.png"
          alt="clouds"
          style={{ position: "absolute" }}
          className="parallax-img"
          imgStyle={{
            top: `${0.25 * scrollAmount}px`,
          }}
          placeholder="none"
        ></StaticImage>

        <StaticImage
          src="../assets/images/parallax/layer05_Hills.png"
          alt="hills"
          style={{ position: "absolute" }}
          className="parallax-img"
          placeholder="none"
          layout="fullWidth"
        ></StaticImage>

        <StaticImage
          src="../assets/images/parallax/dragon.png"
          alt="dragon"
          style={{ position: "absolute" }}
          className="parallax-img-dragon"
          placeholder="none"
          layout="fixed"
          width={250}
        ></StaticImage>

        <h2 id="hero-title">
          we are
          <br />
          supercool games
        </h2>

        <StaticImage
          src="../assets/images/parallax/layer02_Trees_rocks.png"
          alt="trees and rocks"
          style={{ position: "absolute" }}
          className="parallax-img"
          placeholder="none"
          layout="fullWidth"
        ></StaticImage>

        <StaticImage
          src="../assets/images/parallax/character.png"
          alt="character"
          style={{ position: "absolute" }}
          className="parallax-img-character"
          placeholder="none"
          layout="fixed"
          width={200}
        ></StaticImage>

        <StaticImage
          src="../assets/images/parallax/layer01_Ground.png"
          alt="ground"
          style={{ position: "absolute" }}
          className="parallax-img"
          placeholder="none"
          layout="fullWidth"
        ></StaticImage>

        <a href="#" className="btn-hero">
          Explore
        </a>
      </section>

      <section className="sec">
        <h2>Parallax Effect</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos nulla
          cupiditate est unde minima aliquam deleniti ea ut nam adipisci
          molestias ducimus ipsa aspernatur maiores dolore, labore amet
          quisquam!<br></br>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fuga et
          inventore eius reprehenderit itaque modi minus veniam, excepturi porro
          corrupti officia? A impedit rem cumque facere dolorem aperiam eaque!
        </p>
      </section>
    </header>
  )
}

export default Hero
