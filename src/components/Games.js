import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { Link } from "gatsby"

const Games = ({ games }) => {
  return (
    <div className="section-content">
      <div className="wrapper">
        <h2 className="section__headline">Our games.</h2>
        <div className="all-games-container">
          {games.map((game, gameIndex) => {
            const {
              id,
              title,
              description,
              short_description,
              desktop_picture,
            } = game

            const slug = slugify(title, { lower: true })

            return (
              <article key={id} className="game-card">
                <div className="card-content">
                  <h2 className="card-title">{title}</h2>
                  <p className="card-body">{short_description}</p>
                  <Link to={`/games/${slug}`} className="btn btn-game">
                    See more
                  </Link>
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
  )
}

export default Games
