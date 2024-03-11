import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Theme from '../layout/Theme'
import Carousel from 'react-grid-carousel';
import { useForm } from 'react-hook-form';
import services from '../api/services';


export default function Register() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        mode: 'all'
    });

    const [errorsSummary, setErrorsSummary] = useState([]);


    const onSubmit = data => {
        // console.log('data', data);
        services.Account.register(data).then(result => console.log(result))
            .catch((error) => {
                // Error
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    // setErrorsSummary(error.response.data.DuplicateUserName);
                    setErrorsSummary(error.response.data.DuplicateEmail);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the 
                    // browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                // console.log(error.config);
            });;
    };


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
                                    <h2 className="my-0">Let's get started</h2>
                                    <p className="small mb-4">Create account to see our top picks for you!</p>
                                    <span id='errorSummary' className='text-danger'>{errorsSummary}</span>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">Name</label>
                                            <input placeholder="Enter Name" type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" {...register("username", { required: true })} />
                                            {errors.username && <span className='text-danger'>Username required</span>}
                                        </div>

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
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword2">Confirmation Password</label>
                                            <input placeholder="Enter Confirmation Password" name="confirmPwd" type="password" id="exampleInputPassword2"   {...register('confirmPwd', {
                                                required: true, validate: (val) => {
                                                    if (watch('password') != val) {
                                                        return "Your passwords do no match";
                                                    }
                                                }
                                            })}
                                                className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
                                            />
                                            {errors.confirmPwd && <span className='text-danger'>Your passwords do no match</span>}
                                        </div>
                                        <button type="submit" className="btn btn-success rounded btn-lg btn-block">Create Account</button>
                                    </form>
                                    <p className="text-muted text-center small py-2 m-0">or</p>
                                    <Link to='' className="btn btn-dark btn-block rounded btn-lg btn-apple">
                                        <i className="icofont-brand-apple mr-2"></i> Sign up with Apple
                                    </Link>
                                    <Link to='' className="btn btn-light border btn-block rounded btn-lg btn-google">
                                        <i className="icofont-google-plus text-danger mr-2"></i> Sign up with Google
                                    </Link>
                                    <p className="text-center mt-3 mb-0"><Link to='/login' className="text-dark">Already have an account! Sign in</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
