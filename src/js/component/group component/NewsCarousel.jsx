import React from 'react'
import NewsCard from './NewsCard'


const NewsCarousel = () => {
  return (
    <div className='boxie my-4'>
      <div id="Newscarousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='carousel-card d-flex justify-content-between'>
              <NewsCard />
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#Newscarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#Newscarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default NewsCarousel
