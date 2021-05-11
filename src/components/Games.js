import React from "react"
import Title from "./Title"
import Game from "./Game"
import { Link } from "gatsby"

const Games = ({ games, title }) => {
  return (
    <div>
      {games.map(game => {
        return <Game key={game.strapiId} {...game} />
      })}
    </div>
  )
}

export default Games
