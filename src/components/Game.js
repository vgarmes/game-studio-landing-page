import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReviewsSlider from "./ReviewsSlider"
import slugify from "slugify"
import { Link } from "gatsby"

const Game = ({
  platforms,
  reviews,
  title,
  description,
  cover,
  release_date,
}) => {
  const slug = slugify(title, { lower: true })
  return (
    <article className="game">
      <div className="game-img">
        <GatsbyImage image={getImage(cover.localFile)} alt={title} />
      </div>
      <div className="game-info">
        <Link to={`/${slug}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <a href="#" className="btn btn-game">
          Visit
        </a>
      </div>
    </article>
  )
}

export default Game
