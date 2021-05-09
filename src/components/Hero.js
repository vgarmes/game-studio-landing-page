import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
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
          src="../assets/images/parallax/layer03_Hills_Castle.png"
          alt="hills and a castle"
          style={{ position: "absolute" }}
          className="parallax-img"
          id="hills-castle"
          placeholder="blurred"
          layout="fullWidth"
        ></StaticImage>

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
          src="../assets/images/parallax/layer01_Ground.png"
          alt="ground"
          style={{ position: "absolute" }}
          className="parallax-img"
          id="ground"
          placeholder="blurred"
          layout="fullWidth"
        ></StaticImage>
      </section>
    </header>
  )
}

export default Hero
