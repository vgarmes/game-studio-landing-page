import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY
    }
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
          id="rocks"
          placeholder="blurred"
          layout="fullWidth"
        ></StaticImage>

        <StaticImage
          src="../assets/images/parallax/layer05_Hills.png"
          alt="hills"
          style={{ position: "absolute" }}
          className="parallax-img"
          id="hills"
          placeholder="blurred"
          layout="fullWidth"
        ></StaticImage>

        <StaticImage
          src="../assets/images/parallax/layer04_Clouds.png"
          alt="clouds"
          style={{ position: "absolute" }}
          className="parallax-img"
          id="clouds"
          placeholder="blurred"
          layout="fullWidth"
        ></StaticImage>

        <StaticImage
          src="../assets/images/parallax/layer08_Dragon.png"
          alt="dragon"
          style={{ position: "absolute" }}
          className="parallax-img"
          id="dragon"
          placeholder="blurred"
          layout="fullWidth"
        ></StaticImage>

        <h2 id="hero-title">super cool games</h2>

        <StaticImage
          src="../assets/images/parallax/layer02_Trees_rocks.png"
          alt="trees and rocks"
          style={{ position: "absolute" }}
          className="parallax-img"
          id="trees-rocks"
          placeholder="blurred"
          layout="fullWidth"
        ></StaticImage>

        <StaticImage
          src="../assets/images/parallax/layer08_Character.png"
          alt="character"
          style={{ position: "absolute" }}
          className="parallax-img"
          id="character"
          placeholder="blurred"
          layout="fullWidth"
        ></StaticImage>

        <StaticImage
          src="../assets/images/parallax/layer01_Ground.png"
          alt="ground"
          style={{ position: "absolute" }}
          className="parallax-img"
          id="ground"
          placeholder="blurred"
          layout="fullWidth"
        ></StaticImage>

        <a href="#" class="btn-hero">
          Explore
        </a>
      </section>

      <section class="sec">
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
