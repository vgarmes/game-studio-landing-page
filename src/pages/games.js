import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const games = ({ data }) => {
  const {
    allStrapiGame: { nodes: games },
  } = data

  return (
    <Layout>
      <div className="section-content">
        <div className="wrapper">
          <div className="all-games-container">
            {games.map((game, gameIndex) => {
              const { id, title, description, desktop_picture } = game

              return (
                <article key={id} className="game-card">
                  <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-body">Role playing game</p>
                    <a href="#" className="btn btn-game">
                      See more
                    </a>
                  </div>
                  <GatsbyImage
                    image={getImage(desktop_picture.localFile)}
                    className="card-image"
                    style={{ position: "absolute" }}
                    alt={title}
                  />
                </article>
              )
            })}
          </div>
        </div>
      </div>
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
