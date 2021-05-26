import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import GamesGallery from "../components/GamesGallery"
import GamesButton from "../components/GamesButton"
import JoinUs from "../components/JoinUs"

const Home = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <About />
      <GamesGallery />
      <GamesButton />
      <JoinUs />
    </Layout>
  )
}

export default Home
