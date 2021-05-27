import React, { useState, useEffect, useRef } from "react"
import GamesGallery from "./GamesGallery"

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
      <GamesGallery />
    </>
  )
}

export default Hero
