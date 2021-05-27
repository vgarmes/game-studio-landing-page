import React, { useState, useEffect } from "react"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { Link } from "gatsby"

const query = graphql`
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

const GamesGallery = () => {
  const data = useStaticQuery(query)
  const games = data.allStrapiGame.nodes

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = games.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, games])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <div className="featured-games-gallery-container">
      <div className="item-container">
        {games.map((game, gameIndex) => {
          const { id, title, short_description, desktop_picture } = game
          const image = getImage(desktop_picture.localFile)
          const slug = slugify(title, { lower: true })

          let position = "nextSlide"
          if (gameIndex === index) {
            position = "activeSlide"
          }
          if (
            gameIndex === index - 1 ||
            (index === 0 && gameIndex === games.length - 1)
          ) {
            position = "lastSlide"
          }

          return (
            <article key={id} className={`gallery-item ${position}`}>
              <GatsbyImage
                image={image}
                className="gallery-item__picture"
                style={{ position: "absolute" }}
                alt={title}
              />

              <div className="gallery-item__text">
                <h3>{title}</h3>
                <p>{short_description}</p>
                <Link to={`/games/${slug}`} className="btn btn-game">
                  See more
                </Link>
              </div>
            </article>
          )
        })}
      </div>

      <div className="paddlenav">
        <ul>
          <li className="paddlenav-item">
            <button
              className="paddlenav-arrow paddlenav-arrow-previous"
              onClick={() => setIndex(index - 1)}
            >
              <IoIosArrowDropleft />
            </button>
          </li>
          <li className="paddlenav-item">
            <button
              className="paddlenav-arrow paddlenav-arrow-next"
              onClick={() => setIndex(index + 1)}
            >
              <IoIosArrowDropright />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GamesGallery
