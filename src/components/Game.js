import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReviewsSlider from "./ReviewsSlider"
import PlatformIcon from "./PlatformIcon"
import { Link } from "gatsby"
import { SiPlaystation4, SiNintendoswitch, SiSteam } from "react-icons/si"

const Game = ({
  platforms,
  reviews,
  title,
  description,
  short_description,
  desktop_picture,
  release_date,
}) => {
  return (
    <section className="section-content single-game">
      <GatsbyImage
        className="game-image"
        imgStyle={{ objectPosition: "top" }}
        image={getImage(desktop_picture.localFile)}
        alt={title}
      />
      <div className="wrapper">
        <div className="game-info">
          <h2 className="section__headline">{title}</h2>
          <p>{description}</p>
          <h3>What people say:</h3>
          <div className="reviews-stack">
            {reviews.map(singleReview => {
              const { id, author, review, score } = singleReview
              return (
                <article key={id} className="review-content">
                  <p className="game-review">"{review}"</p>
                  <p className="game-review-author">{score}</p>
                  <p className="game-review-author">{author}</p>
                </article>
              )
            })}
          </div>
          <h3>Available on:</h3>
          <div className="platform-stack">
            {platforms.map(platform => (
              <Link key={platform.id} className="game-store-link" to="#">
                <PlatformIcon platform={platform} size={30} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Game
