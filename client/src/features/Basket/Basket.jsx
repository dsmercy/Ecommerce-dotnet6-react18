import React, { useEffect } from 'react'
import cartStore from '../../store/cartStore'
import { commonStore } from '../../store/commonStore';
import { useState } from 'react';

export default function Basket() {

    const carts = commonStore((state) => state.carts);
    const products = commonStore((state) => state.products);
    const addCart = commonStore((state) => state.addCart);
    const totalCartItems = carts.reduce((total, item) => total + item.quantity, 0);

    const addtoCart = (e, productId, quantity) => {
        e.preventDefault();
        // setLoading(true);
        addCart(productId, quantity);
        // setTimeout(function () { setLoading(false) }, 2000);
    }

    const calculateTotalCostAfterDiscount = (carts, products) => {
        let totalCost = 0;
        carts.forEach(cartItem => {
            const product = products.find(product => product.id === cartItem.productId);
            if (product) {
                totalCost += product.offerPrice * cartItem.quantity;
            }
        });
        return totalCost;
    };

    const calculateTotalCost = (carts, products) => {
        let totalCost = 0;
        carts.forEach(cartItem => {
            const product = products.find(product => product.id === cartItem.productId);
            if (product) {
                totalCost += product.price * cartItem.quantity;
            }
        });
        return totalCost;
    };

    const totalCost = calculateTotalCostAfterDiscount(carts, products);
    const deliveryCharge = totalCost < 200 ? 20 : 0;
    const storeCharge = 50;
    const totalCostWithoutDiscount = calculateTotalCost(carts, products);
    const totalDiscount = totalCostWithoutDiscount - totalCost;
    const toPayCost = totalCost + deliveryCharge + storeCharge;
    const totalSavings = (totalCost > 200) ? totalDiscount + deliveryCharge : totalDiscount;

    useEffect(() => {
        console.log('carts', carts);
        console.log('totalDiscount', totalDiscount);
    }, [carts])


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
                                                <span className="c-number">1</span> Cart ({carts ? totalCartItems : 0}) items
                                            </button>
                                        </h2>
                                    </div>
                                    {carts && carts.map((cart, index) => {

                                        const product = products.find(product => product.id === cart.productId);

                                        return (
                                            <div className="collapse show" aria-labelledby="headingOne" key={index}
                                                data-parent="#accordionExample">
                                                <div className="card-body p-0 border-top">
                                                    <div className="osahan-cart">
                                                        <div className="cart-items bg-white position-relative border-bottom">
                                                            <a href="product_details.html" className="position-absolute">
                                                                <span className="badge badge-danger m-3">10%</span>
                                                            </a>
                                                            <div className="d-flex  align-items-center p-3">
                                                                <a href="product_details.html"><img src={product.images[0].imagePath}
                                                                    className="img-fluid" /></a>
                                                                <a href="product_details.html"
                                                                    className="ml-3 text-dark text-decoration-none w-100">
                                                                    <h5 className="mb-1">{product.productName}</h5>
                                                                    <p className="text-muted mb-2"><del
                                                                        className="text-success mr-1">&#8377;{product.price}/{product.priceUnit}</del> &#8377;{product.offerPrice}/{product.priceUnit}</p>
                                                                    <div className="d-flex align-items-center">
                                                                        <p className="total_price font-weight-bold m-0">&#8377;{Number(product.offerPrice) * Number(cart.quantity)}</p>
                                                                        <div id='myform' className="cart-items-number d-flex ml-auto">
                                                                            <input type='button' defaultValue='-'
                                                                                className='qtyminus btn btn-success btn-sm'
                                                                                field='quantity' onClick={(e) => addtoCart(e, product.id, -1)} />
                                                                            <input type='text' name='quantity' value={cart.quantity}
                                                                                className='qty form-control' readOnly onClick={(e) => e.preventDefault()} />
                                                                            <input type='button' defaultValue='+'
                                                                                className='qtyplus btn btn-success btn-sm'
                                                                                field='quantity' onClick={(e) => addtoCart(e, product.id, 1)} />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

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
                                            <p className="mb-1">Item Total <span className="small text-muted">({carts ? totalCartItems : 0} items)</span> <span
                                                className="float-right text-dark">&#8377;{carts ? totalCost : 0}</span></p>
                                            <p className="mb-1">Store Charges <span className="float-right text-dark">&#8377;{storeCharge}</span></p>
                                            <p className="mb-3">Delivery Fee <span data-toggle="tooltip" data-placement="top"
                                                title="Delivery partner fee - &#8377;3" className="text-info ml-1"><i
                                                    className="icofont-info-circle"></i></span><span
                                                        className="float-right text-dark">&#8377;{deliveryCharge}</span></p>
                                            <h6 className="mb-0 text-success">Total Discount<span
                                                className="float-right text-success">&#8377;{totalDiscount}</span></h6>
                                        </div>
                                        <div className="p-3 border-top">
                                            <h5 className="mb-0">TO PAY <span className="float-right text-danger">&#8377;{toPayCost}</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-success text-center">Your Total Savings on this order &#8377;{totalSavings}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
