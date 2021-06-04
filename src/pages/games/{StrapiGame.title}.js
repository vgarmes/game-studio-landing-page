import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Game from "../../components/Game"

const GameTemplate = ({ data }) => {
  const game = data.strapiGame

  return (
    <Layout>
      <Game {...game} />
    </Layout>
  )
}

export const query = graphql`
  query getSingleGame($title: String) {
    strapiGame(title: { eq: $title }) {
      title
      description
      cover {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      release_date
      reviews {
        author
        id
        review
        score
      }
      platforms {
        id
        name
      }
    }
  }
`

export default GameTemplate
