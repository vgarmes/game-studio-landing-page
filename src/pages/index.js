import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Games from "../components/Games"

const Home = ({ data }) => {
  const {
    allStrapiGame: { nodes: games },
  } = data

  return (
    <Layout>
      <Hero />
      <Games title="featured games" games={games} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiGame(
      sort: { fields: release_date, order: DESC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        platforms {
          id
          name
        }
        reviews {
          id
          author
          review
          score
        }
        title
        description
        featured
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        strapiId
        release_date
      }
    }
  }
`

export default Home
