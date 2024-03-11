import React from 'react'
import Carousel from 'react-grid-carousel'
import { Link } from 'react-router-dom'

export default function Promo() {
  return (
    <>

      <div className="py-3 osahan-promos">
        <div className="d-flex align-items-center mb-3">
          <h5 className="m-0">Promos for you</h5>
          <Link to='' className="ml-auto btn btn-outline-success btn-sm">See more</Link>
        </div>
        <Carousel showDots cols={3} loop autoplay={2000} className="promo-slider pb-0 mb-0">
          <Carousel.Item>
            <div className="osahan-slider-item mx-2">
              <Link to='' ><img src="img/promo1.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="osahan-slider-item mx-2">
              <Link to='' ><img src="img/promo2.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="osahan-slider-item mx-2">
              <Link to='' ><img src="img/promo3.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="osahan-slider-item mx-2">
              <Link to='' ><img src="img/promo4.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="osahan-slider-item mx-2">
              <Link to='' ><img src="img/promo2.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="osahan-slider-item mx-2">
              <Link to='' ><img src="img/promo3.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}
