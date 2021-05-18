import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReviewsSlider from "../components/ReviewsSlider"
import Layout from "../components/Layout"

const GameTemplate = ({ data }) => {
  const {
    title,
    description,
    cover,
    release_date,
    reviews,
    platforms,
  } = data.strapiGame

  const pathToImage = getImage(cover.localFile)

  return (
    <Layout>
      <article className="game">
        <GatsbyImage image={pathToImage} className="game-img" alt={title} />
        <div className="game-info">
          <h3>{title}</h3>

          <h4>Relased: {release_date}</h4>
          <p className="game-description">{description}</p>
          <div className="game-reviews">
            <ReviewsSlider reviews_data={reviews} />
          </div>
        </div>
      </article>
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
