import React, { useState, useEffect } from "react"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { FaQuoteRight } from "react-icons/fa"

const ReviewsSlider = ({ reviews_data }) => {
  const [reviews, setReviews] = useState(reviews_data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = reviews.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, reviews])

  return (
    <>
      {reviews.map((singleReview, reviewIndex) => {
        const { id, author, review, score } = singleReview

        let position = "nextSlide"
        if (reviewIndex === index) {
          position = "activeSlide"
        }
        if (
          reviewIndex === index - 1 ||
          (index === 0 && reviewIndex === reviews.length - 1)
        ) {
          position = "lastSlide"
        }

        return (
          <article key={id} className={`game-review ${position}`}>
            <h4>{review}</h4>
            <FaQuoteRight className="icon" />
            <p>{author}</p>
            <p>{score}</p>
          </article>
        )
      })}
      <button className="btn-prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="btn-next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </>
  )
}

export default ReviewsSlider
