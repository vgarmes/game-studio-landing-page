import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import GamesGallery from "../components/GamesGallery"
import SeeAllGames from "../components/SeeAllGames"
import CareersSection from "../components/CareersSection"
import Services from "../components/Services"
import SEO from "../components/SEO"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <CareersSection />
    </Layout>
  )
}

export default Home
