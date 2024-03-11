import React from 'react'
import Carousel from 'react-grid-carousel'
import { Link } from 'react-router-dom'

export default function ProductSlide() {
  return (
   <>
   
   <section className="py-4 osahan-main-body">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">

                    <div className="osahan-home-page">

                        <div className="osahan-body">

                            <div className="pt-3 pb-2 rounded osahan-categories">
                                <div className="d-flex align-items-center mb-2">
                                    <h5 className="m-0 text-white">What do you looking for?</h5>
                                </div>
                                <Carousel showDots cols={8} loop autoplay={2000} className="categories-slider">
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/1.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Vegetables</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/2.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Fruits</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/3.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Meat</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/4.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Seafood</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/5.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Milk & Egg</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/6.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Bread</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/7.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Frozen</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/8.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Organic</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/1.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Vegetables</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/2.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Fruits</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/3.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Meat</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/1.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Vegetables</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/2.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Fruits</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/3.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Meat</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/4.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Seafood</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item className="col-c">
                                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                                            <Link to='/productlist'>
                                                <img src="img/categorie/3.svg" className="img-fluid px-2 mx-auto"/>
                                                <p className="m-0 pt-2 text-muted text-center">Meat</p>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
   </>
  )
}
