import React from "react"
import { Link } from "gatsby"

const JoinUs = () => {
  return (
    <div className="section-content">
      <div className="wrapper">
        <h2 className="section__headline">Join us!</h2>
        <p className="section__text">
          We are always on the lookout for talent. See our current job openings!{" "}
        </p>
        <div className="cta-wrapper">
          <Link to="/careers" className="btn btn-careers">
            See job openings
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
