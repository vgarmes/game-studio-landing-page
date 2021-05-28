import React from "react"

const TeamSection = () => {
  return (
    <div className="section-content">
      <div className="wrapper">
        <h2 className="section__headline">
          We turn bold ideas into great games
        </h2>
        <p className="section__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos nulla
          cupiditate est unde minima aliquam deleniti ea ut nam adipisci
          molestias ducimus ipsa aspernatur maiores dolore, labore amet
          quisquam!<br></br>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fuga et
          inventore eius reprehenderit itaque modi minus veniam, excepturi porro
          corrupti officia? A impedit rem cumque facere dolorem aperiam eaque!
        </p>
        <div className="cta-wrapper">
          <Link to="/games" className="btn btn-games">
            See all games
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
