import React from 'react'
import { Link } from 'react-router-dom'
import Theme from '../layout/Theme'
import Carousel from 'react-grid-carousel';
import { useForm } from 'react-hook-form';

export default function Login() {


    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all'
    });
    const onSubmit = data => console.log(data);
    //console.log(errors);


    return (
        <>
            <Theme />

            <section className="osahan-main-body">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center vh-100">
                        <div className="landing-page shadow-sm bg-success col-lg-6">
                            <Link className="position-absolute btn-sm btn btn-outline-light m-4 zindex" to="/">Skip <i className="icofont-bubble-right"></i></Link>
                            <Carousel showDots cols={1} loop autoplay={2000} hideArrow={true} className="osahan-slider m-0">
                                <Carousel.Item className="osahan-slider-item text-center">
                                    <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                                        <i className="icofont-sale-discount display-1 text-warning"></i>
                                        <h4 className="my-4 text-white">Best Prices & Offers</h4>
                                        <p className="text-center text-white-50 mb-5 px-4">Cheaper prices than your local<br />supermarket, great cashback offers to top it off.</p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item className="osahan-slider-item text-center">
                                    <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                                        <i className="icofont-cart display-1 text-warning"></i>
                                        <h4 className="my-4 text-white">Wide Assortment</h4>
                                        <p className="text-center text-white-50 mb-5 px-4">Choose from 5000+ products across food<br />, personal care, household & other categories.</p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item className="osahan-slider-item text-center">
                                    <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                                        <i className="icofont-support-faq display-1 text-warning"></i>
                                        <h4 className="my-4 text-white">Easy Returns</h4>
                                        <p className="text-center text-white-50 mb-5 px-4">Not satisfied with a product? Return<br /> it at the doorstep & get a refund within hours.</p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-lg-6 pl-lg-5">
                            <div className="osahan-signup shadow bg-white p-4 rounded">
                                <div className="p-3">
                                    <h2 className="my-0">Welcome Back</h2>
                                    <p className="small mb-4">Sign in to Continue.</p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <input placeholder="Enter Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                            {errors.email && <span className='text-danger'>Enter a valid email</span>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input placeholder="Enter Password" type="password" className="form-control" id="exampleInputPassword1" {...register("password", { required: true, minLength: 6, maxLength: 12 })} />
                                            {errors.password && <span className='text-danger'>Enter a Password between 6 to 12 character</span>}
                                        </div>
                                        <button type="submit" className="btn btn-success rounded btn-lg btn-block">Sign In</button>
                                    </form>
                                    <p className="text-muted text-center small py-2 m-0">or</p>
                                    <Link to='' className="btn btn-dark btn-block rounded btn-lg btn-apple">
                                        <i className="icofont-brand-apple mr-2"></i> Sign up with Apple
                                    </Link>
                                    <Link to='' className="btn btn-light border btn-block rounded btn-lg btn-google">
                                        <i className="icofont-google-plus text-danger mr-2"></i> Sign up with Google
                                    </Link>
                                    <p className="text-center mt-3 mb-0"><Link to='/register' className="text-dark">Don't have an account? Sign up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
