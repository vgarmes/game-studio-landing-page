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
      <GatsbyImage
        image={getImage(cover.localFile)}
        className="game-img"
        alt={title}
      />
      <div className="game-info">
        <Link to={`/${slug}`}>
          <h3>{title}</h3>
        </Link>
        <h4>Relased: {release_date}</h4>
        <p className="game-description">{description}</p>
        <div className="game-reviews">
          <ReviewsSlider reviews_data={reviews} />
        </div>
      </div>
    </article>
  )
}

export default Game
