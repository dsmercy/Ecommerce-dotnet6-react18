import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cartStore from '../store/cartStore';

export default function Home() {
    const cartItems = cartStore.carts;
    // useEffect(() => {
    //     setCartItems(localStorage.getItem('cart'));
    // }, []);



    return (
        <>
            <div className="bg-white shadow-sm osahan-main-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-white osahan-header py-0 container">
                    <Link className="navbar-brand mr-0" to='/'><img alt='tag' className="img-fluid logo-img " src="img/logo.png" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="ml-3 d-flex align-items-center">
                        <div className="dropdown mr-3">
                            <Link className="text-dark dropdown-toggle d-flex align-items-center osahan-location-drop" to='/'
                                id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <div><i
                                    className="icofont-location-pin d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm mr-2"></i>
                                </div>
                                <div>
                                    <p className="text-muted mb-0 small">Select Location</p>
                                    Maharashtra India...
                                </div>
                            </Link>
                            <div className="dropdown-menu osahan-select-loaction p-3" aria-labelledby="navbarDropdown">
                                <span>Select your city to start shopping</span>
                                <form className="form-inline my-2">

                                    <div className="input-group p-0 col-lg-12">
                                        <input type="text" className="form-control form-control-sm"
                                            id="inlineFormInputGroupUsername2" placeholder="Search Location" />
                                        <div className="input-group-prepend">
                                            <div className="btn btn-success rounded-right btn-sm"><i
                                                className="icofont-location-arrow"></i> Detect</div>
                                        </div>
                                    </div>
                                </form>
                                <div className="city pt-2">
                                    <h6>Top Citys</h6>
                                    <p className="border-bottom m-0 py-1"><Link to='/' className="text-dark">Banglore</Link></p>
                                    <p className="border-bottom m-0 py-1"><Link to='/' className="text-dark">Noida</Link></p>
                                    <p className="border-bottom m-0 py-1"><Link to='/' className="text-dark">Delhi</Link></p>
                                    <p className="m-0 py-1"><Link to='/' className="text-dark">Mumbai</Link></p>
                                </div>
                            </div>
                        </div>

                        <div className="input-group mr-sm-2 col-lg-12">
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername2"
                                placeholder="Search for Products.." />
                            <div className="input-group-prepend">
                                <div className="btn btn-success rounded-right"><i className="icofont-search"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto d-flex align-items-center">

                        <div className="mr-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
                            <Link className="icofont-login" to="/login"></Link>
                        </div>

                        <div className="dropdown mr-3">
                            <Link to='/' className="dropdown-toggle text-dark" id="dropdownMenuButton" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <img src="img/user.png" alt='name' className="img-fluid rounded-circle header-user mr-2" /> Hi Osahan
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right top-profile-drop"
                                aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" to='/'>My account</Link>
                                <Link className="dropdown-item" to='/'>My Ordera</Link>
                                <Link className="dropdown-item" to='/'>My address</Link>
                                <Link className="dropdown-item" to='/'>My Cart</Link>
                                <Link className="dropdown-item" to='/'>Logout</Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Link to='/' className="text-dark dropdown-toggle not-drop" id="dropdownMenuNotification"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i
                                    className="icofont-notification d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm">

                                </i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right p-0 osahan-notifications-main"
                                aria-labelledby="dropdownMenuNotification">

                                <div className="osahan-notifications bg-white border-bottom p-2">
                                    <div className="position-absolute ml-n1 py-2"><i
                                        className="icofont-check-circled text-white bg-success rounded-pill p-1"></i></div>
                                    <Link to='/' className="text-decoration-none text-dark">
                                        <div className="notifiction small">
                                            <div className="ml-3">
                                                <p className="font-weight-bold mb-1">Yay! Order Complete</p>
                                                <p className="small m-0"><i className="icofont-ui-calendar"></i> Today, 05:14 AM</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="osahan-notifications bg-white border-bottom p-2">
                                    <Link to='/' className="text-decoration-none text-muted">
                                        <div className="notifiction small">
                                            <div className="ml-3">
                                                <p className="font-weight-bold mb-1">Yipiee. order Success</p>
                                                <p className="small m-0"><i className="icofont-ui-calendar"></i> Monday, 08:30 PM</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="osahan-notifications bg-white p-2">
                                    <Link to='/' className="text-decoration-none text-muted">
                                        <div className="notifiction small">
                                            <div className="ml-3">
                                                <p className="font-weight-bold mb-1">New Promos Coming</p>
                                                <p className="small m-0"><i className="icofont-ui-calendar"></i> Sunday, 10:30 AM</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link to='/cart' className="ml-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
                            <i className="icofont-shopping-cart"></i>
                            <span className='badge text-dark' id='lblCartCount'> {cartItems ? cartItems.length : 0} </span>
                        </Link>
                    </div>
                </nav>

                <div className="bg-color-head">
                    <div className="container menu-bar d-flex align-items-center">
                        <ul className="list-unstyled form-inline mb-0">
                            <li className="nav-item active">
                                <Link className="nav-link text-white pl-0" to="/">Home <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-white dropdown-toggle" to='/' id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/productslist">All Products</Link>
                                    <Link className="dropdown-item" to='listing'>Vegetables</Link>
                                    <Link className="dropdown-item" to='productdetails'>Fruits</Link>

                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-white dropdown-toggle" to='/' id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Extra Pages
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to='/'>Terms & Conditions</Link>
                                    <Link className="dropdown-item" to="/privacy">Privacy</Link>
                                    <Link className="dropdown-item" to='/'>FAQ</Link>
                                </div>
                            </li>
                        </ul>
                        <div className="list-unstyled form-inline mb-0 ml-auto">
                            {/* <Link to="/trending" className="text-white px-3 py-2" >Trending</Link> */}
                            <Link to="/register" className="text-white bg-offer px-3 py-2">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
