import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Games from "../components/Games"

const games = ({ data }) => {
  const {
    allStrapiGame: { nodes: games },
  } = data

  return (
    <Layout>
      <Games games={games} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiGame(sort: { fields: release_date, order: DESC }) {
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
        short_description
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
        desktop_picture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

export default games
