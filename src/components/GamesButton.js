import React from "react"
import { Link } from "gatsby"

const GamesButton = () => {
  return (
    <div className="cta-wrapper">
      <Link to="/games" className="btn btn-games">
        See all games
      </Link>
    </div>
  )
}

export default GamesButton
