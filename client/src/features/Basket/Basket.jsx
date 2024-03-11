import React from 'react'

export default function Basket() {
    return (
        <>
            <section className="py-4 osahan-main-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="accordion" id="accordionExample">
                                <div className="card border-0 osahan-accor rounded shadow-sm overflow-hidden">
                                    <div className="card-header bg-white border-0 p-0" id="headingOne">
                                        <h2 className="mb-0">
                                            <button
                                                className="btn d-flex align-items-center bg-white btn-block text-left btn-lg h5 px-3 py-4 m-0"
                                                type="button" data-toggle="collapse" data-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                                <span className="c-number">1</span> Cart (3 items)
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                        data-parent="#accordionExample">
                                        <div className="card-body p-0 border-top">
                                            <div className="osahan-cart">
                                                <div className="cart-items bg-white position-relative border-bottom">
                                                    <a href="product_details.html" className="position-absolute">
                                                        <span className="badge badge-danger m-3">10%</span>
                                                    </a>
                                                    <div className="d-flex  align-items-center p-3">
                                                        <a href="product_details.html"><img src="img/cart/g1.png"
                                                            className="img-fluid" /></a>
                                                        <a href="product_details.html"
                                                            className="ml-3 text-dark text-decoration-none w-100">
                                                            <h5 className="mb-1">Bread</h5>
                                                            <p className="text-muted mb-2"><del
                                                                className="text-success mr-1">$1.20kg</del> $0.98/kg</p>
                                                            <div className="d-flex align-items-center">
                                                                <p className="total_price font-weight-bold m-0">$2.82</p>
                                                                <form id='myform' className="cart-items-number d-flex ml-auto"
                                                                    method='POST' action='#'>
                                                                    <input type='button' value='-'
                                                                        className='qtyminus btn btn-success btn-sm'
                                                                        field='quantity' />
                                                                    <input type='text' name='quantity' value='1'
                                                                        className='qty form-control' />
                                                                    <input type='button' value='+'
                                                                        className='qtyplus btn btn-success btn-sm'
                                                                        field='quantity' />
                                                                </form>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="cart-items bg-white position-relative border-bottom">
                                                    <div className="d-flex  align-items-center p-3">
                                                        <a href="product_details.html"><img src="img/cart/g2.png"
                                                            className="img-fluid" /></a>
                                                        <a href="product_details.html"
                                                            className="ml-3 text-dark text-decoration-none w-100">
                                                            <h5 className="mb-1">Spinach</h5>
                                                            <p className="text-muted mb-2"><del
                                                                className="text-success mr-1">$1.20kg</del> $0.98/kg</p>
                                                            <div className="d-flex align-items-center">
                                                                <p className="total_price font-weight-bold m-0">$3.82</p>
                                                                <form id='myform' className="cart-items-number d-flex ml-auto"
                                                                    method='POST' action='#'>
                                                                    <input type='button' value='-'
                                                                        className='qtyminus btn btn-success btn-sm'
                                                                        field='quantity' />
                                                                    <input type='text' name='quantity' value='1'
                                                                        className='qty form-control' />
                                                                    <input type='button' value='+'
                                                                        className='qtyplus btn btn-success btn-sm'
                                                                        field='quantity' />
                                                                </form>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="cart-items bg-white position-relative border-bottom">
                                                    <div className="d-flex  align-items-center p-3">
                                                        <a href="product_details.html"><img src="img/cart/g3.png"
                                                            className="img-fluid" /></a>
                                                        <a href="product_details.html"
                                                            className="ml-3 text-dark text-decoration-none w-100">
                                                            <h5 className="mb-1">Chilli</h5>
                                                            <p className="text-muted mb-2"><del
                                                                className="text-success mr-1">$1.20kg</del> $0.98/kg</p>
                                                            <div className="d-flex align-items-center">
                                                                <p className="total_price font-weight-bold m-0">$2.82</p>
                                                                <form id='myform' className="cart-items-number d-flex ml-auto"
                                                                    method='POST' action='#'>
                                                                    <input type='button' value='-'
                                                                        className='qtyminus btn btn-success btn-sm'
                                                                        field='quantity' />
                                                                    <input type='text' name='quantity' value='1'
                                                                        className='qty form-control' />
                                                                    <input type='button' value='+'
                                                                        className='qtyplus btn btn-success btn-sm'
                                                                        field='quantity' />
                                                                </form>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href="#" className="text-decoration-none btn btn-block p-3" type="button"
                                                        data-toggle="collapse" data-target="#collapsetwo" aria-expanded="true"
                                                        aria-controls="collapsetwo">
                                                        <div
                                                            className="rounded shadow bg-success d-flex align-items-center p-3 text-white">
                                                            <div className="more">
                                                                <h6 className="m-0">Subtotal $8.52</h6>
                                                                <p className="small m-0">Proceed to checkout</p>
                                                            </div>
                                                            <div className="ml-auto"><i className="icofont-simple-right"></i></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sticky_sidebar">
                                <div className="bg-white rounded overflow-hidden shadow-sm mb-3 checkout-sidebar">
                                    <div className="d-flex align-items-center osahan-cart-item-profile border-bottom bg-white p-3">
                                        <img alt="osahan" src="img/starter1.jpg" className="mr-3 rounded-circle img-fluid" />
                                        <div className="d-flex flex-column">
                                            <h6 className="mb-1 font-weight-bold">Osahan Fresh Store</h6>
                                            <p className="mb-0 small text-muted"><i className="feather-map-pin"></i> 2036 2ND AVE, NEW
                                                YORK, NY 10029</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="bg-white p-3 clearfix">
                                            <p className="font-weight-bold small mb-2">Bill Details</p>
                                            <p className="mb-1">Item Total <span className="small text-muted">(3 item)</span> <span
                                                className="float-right text-dark">$3140</span></p>
                                            <p className="mb-1">Store Charges <span className="float-right text-dark">$62.8</span></p>
                                            <p className="mb-3">Delivery Fee <span data-toggle="tooltip" data-placement="top"
                                                title="Delivery partner fee - $3" className="text-info ml-1"><i
                                                    className="icofont-info-circle"></i></span><span
                                                        className="float-right text-dark">$10</span></p>
                                            <h6 className="mb-0 text-success">Total Discount<span
                                                className="float-right text-success">$1884</span></h6>
                                        </div>
                                        <div className="p-3 border-top">
                                            <h5 className="mb-0">TO PAY <span className="float-right text-danger">$1329</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-success text-center">Your Total Savings on this order $8.52</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
