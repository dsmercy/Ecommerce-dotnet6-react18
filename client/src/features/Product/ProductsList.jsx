import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Filter from "../../components/Filter";
import services from "../../api/services";


export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);


    const addtoCart = (product) => {
        // setLoading(true);
        setCartItems([...cartItems, product.id]);
        localStorage.setItem('cart', cartItems);
        // setTimeout(function () { setLoading(false) }, 2000);
    }



    // set default theme
    useEffect(() => {
        services.Product.getAll().then(result => {
            setProducts(result.data);
        });
    }, []);

    return (
        <>
            <section className="py-4 osahan-main-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="osahan-listing">
                                <div className="d-flex align-items-center mb-3">
                                    <h4>All Products</h4>
                                    <div className="m-0 text-center ml-auto">
                                        <button onClick={handleShow} className="btn text-muted bg-white mr-2"><i className="icofont-filter mr-1"></i> Filter</button>
                                    </div>
                                </div>
                                <div className="row">

                                    {products.map(product => (
                                        <ProductCard product={product} key={product.id} addtoCart={addtoCart} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Filter handleClose={handleClose} handleShow={handleShow} show={show} />
        </>
    )
}
