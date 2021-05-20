import React from "react"
import Title from "./Title"
import Game from "./Game"
import { Link } from "gatsby"

const Games = ({ games, title }) => {
  return (
    <section className="section games">
      <div className="wrapper">
        <Title title={title} />
        {games.map(game => {
          return <Game key={game.strapiId} {...game} />
        })}
      </div>
    </section>
  )
}

export default Games
