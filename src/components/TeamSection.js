import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const TeamSection = () => {
  return (
    <div className="section-content">
      <div className="team-container">
        <StaticImage
          src="../assets/images/team.jpg"
          alt="supercool team"
          className="team-image-container"
          imgClassName="team-image"
          placeholder="blurred"
        />
        <div className="team-content">
          <h2 className="section__headline">Our team</h2>
          <p className="section__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos
            nulla cupiditate est unde minima aliquam deleniti ea ut nam adipisci
            molestias ducimus ipsa aspernatur maiores dolore, labore amet
            quisquam!
          </p>
          <div className="cta-wrapper">
            <Link to="/games" className="btn btn-cta">
              Team members
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
