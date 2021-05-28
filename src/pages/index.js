import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import CareersSection from "../components/CareersSection"
import Culture from "../components/Culture"
import TeamSection from "../components/TeamSection"
import SEO from "../components/SEO"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <TeamSection />
      <Culture />
      <CareersSection />
    </Layout>
  )
}

export default Home
