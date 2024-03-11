import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Recommend() {

    const [recomendedProducts] = useState([
        { id: "1", name: "Fresh Orange", description: "Orange Great Quality item from Jamaica.", price: "5.0", pictureUrl: "img/recommend/r2.jpg" },
        { id: "2", name: "Green Apple", description: "Green Apple Premium item from Vietnam.", price: "4.0", pictureUrl: "img/recommend/r4.jpg" },
        { id: "3", name: "Fresh Apple", description: "Fresh Apple Premium item from Thailand.", price: "4.5", pictureUrl: "img/recommend/r7.jpg" },
    ]);

    return (
        <>
            <div className="title d-flex align-items-center py-3">
                <h5 className="m-0">Recommend for You</h5>
                <Link to='/' className="ml-auto btn btn-outline-success btn-sm" href="recommend.html">26 more</Link>
            </div>

            <div className="osahan-recommend">
                <div className="row">
                    {recomendedProducts.map((product, index) => (
                        <div className="col-12 col-md-4 mb-3" key={index}>
                            <div className="text-dark text-decoration-none">
                                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="recommend-slider2 rounded mb-0">
                                        <div className="osahan-slider-item m-2 rounded">
                                            <img src={product.pictureUrl} className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                                        </div>
                                    </div>
                                    <div className="p-3 position-relative">
                                        <h6 className="mb-1 font-weight-bold text-success">
                                            {product.name}
                                        </h6>
                                        <p className="text-muted">{product.description}</p>
                                        <div className="d-flex align-items-center">
                                            <h6 className="m-0">${product.price}/kg</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
