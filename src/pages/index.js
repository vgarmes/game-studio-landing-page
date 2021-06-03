import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import CareersSection from "../components/CareersSection"
import Culture from "../components/Culture"
import TeamSection from "../components/TeamSection"
import Seo from "../components/Seo"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <TeamSection />
      <Culture />
      <CareersSection />
    </Layout>
  )
}

export default Home
