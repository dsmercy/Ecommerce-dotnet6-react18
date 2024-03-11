import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import ProductCard from './ProductCard';
import services from "../api/services";

export default function Trending() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        services.Product.getAll().then(result => {
            console.log(result.response);
            setProducts(result.response);
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
                                    <h4>Pick's Today</h4>
                                </div>
                                <div className="row">

                                    {products.slice(0, 8).map(product => (
                                        <ProductCard product={product} key={product.id} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

