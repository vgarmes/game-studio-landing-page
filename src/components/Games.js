import React from "react"
import Title from "./Title"
import Game from "./Game"
import { Link } from "gatsby"

const Games = ({ games, title }) => {
  return (
    <section className="section games">
      <Title title={title} />
      <div className="wrapper">
        {games.map(game => {
          return <Game key={game.strapiId} {...game} />
        })}
      </div>
    </section>
  )
}

export default Games
