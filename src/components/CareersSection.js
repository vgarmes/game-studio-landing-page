import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const CareersSection = () => {
  return (
    <div className="section-content careers">
      <div className="wrapper">
        <div className="careers-content">
          <h2 className="section__headline">Join us!</h2>
          <p className="section__text">
            We are always on the lookout for talent. See our current job
            openings!
          </p>
          <div className="cta-wrapper">
            <Link to="/careers" className="btn btn-careers">
              See job openings
            </Link>
          </div>
        </div>
      </div>
      <StaticImage
        src="../assets/images/careers.jpg"
        alt="supercool employee"
        className="careers-image-container"
        style={{ position: "absolute" }}
        imgClassName="careers-image"
        placeholder="blurred"
      />
    </div>
  )
}

export default CareersSection
