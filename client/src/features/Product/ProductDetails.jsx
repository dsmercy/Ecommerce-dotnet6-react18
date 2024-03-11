import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard'

export default function ProductDetails() {

    const [products] = useState([
        {
          "id": "00c291ce-30a6-42c5-8753-2b969a654db1",
          "productName": "Chipsona Aloo",
          "categoryId": "a3572cfb-5de3-4fc4-a0aa-68b806b636e5",
          "quantity": 50,
          "priceUnit": null,
          "price": 12,
          "offerPrice": 10,
          "description": "Potato is a starchy vegetable which is popularly used in many recipes. Due to their blend taste, peeled Potatoes pair well with a wide number of vegetables. These are also used to make chips and snacks.",
          "inStock": true,
          "createdOn": "3/11/2024 1:58:44 AM",
          "images": [
            {
              "id": "products/wcje6ckr4c606a3cl5ox",
              "imageType": "PRODUCTIMAGE",
              "imagePath": "https://res.cloudinary.com/dyeqnpz4g/image/upload/v1710102526/products/wcje6ckr4c606a3cl5ox.webp",
              "productId": "00c291ce-30a6-42c5-8753-2b969a654db1"
            }
          ]
        },
        {
          "id": "336a934e-217e-482e-9fc2-dd2245db8182",
          "productName": "Red Capsicum",
          "categoryId": "a3572cfb-5de3-4fc4-a0aa-68b806b636e5",
          "quantity": 50,
          "priceUnit": null,
          "price": 50,
          "offerPrice": 40,
          "description": "Crisp in texture and sweet in taste, red capsicum has a vibrant colour and flavour. A staple in salads, it can be cooked or grilled to add zing to any recipe.",
          "inStock": true,
          "createdOn": "3/11/2024 2:05:13 AM",
          "images": [
            {
              "id": "products/zl2ngeojgh9bnq0xb1hx",
              "imageType": "PRODUCTIMAGE",
              "imagePath": "https://res.cloudinary.com/dyeqnpz4g/image/upload/v1710102915/products/zl2ngeojgh9bnq0xb1hx.webp",
              "productId": "336a934e-217e-482e-9fc2-dd2245db8182"
            }
          ]
        },
        {
          "id": "360d7110-8bf2-4e05-a14c-94e8b0808a40",
          "productName": "Ginger (Adrak)",
          "categoryId": "a3572cfb-5de3-4fc4-a0aa-68b806b636e5",
          "quantity": 50,
          "priceUnit": null,
          "price": 40,
          "offerPrice": 35,
          "description": "Ginger is slightly hot and sweet, with a pungent and spicy aroma. Ginger is used fresh, dried, powdered, or as an oil or juice, and is usually additional to processed foods and cosmetics.",
          "inStock": true,
          "createdOn": "3/11/2024 2:03:28 AM",
          "images": [
            {
              "id": "products/bs1zsdl6vwk82ysvuqol",
              "imageType": "PRODUCTIMAGE",
              "imagePath": "https://res.cloudinary.com/dyeqnpz4g/image/upload/v1710102810/products/bs1zsdl6vwk82ysvuqol.webp",
              "productId": "360d7110-8bf2-4e05-a14c-94e8b0808a40"
            }
          ]
        },
        {
          "id": "614651df-7fa5-418b-95f4-f9b9a53c3184",
          "productName": "Garlic (Lehsun)",
          "categoryId": "a3572cfb-5de3-4fc4-a0aa-68b806b636e5",
          "quantity": 50,
          "priceUnit": null,
          "price": 40,
          "offerPrice": 35,
          "description": "Garlic is a herb best known for flavoring and flavoring foods and is widely used in various cuisines, from desi kitchens like tadka dal to dishes like garlic bread. Garlic seems to be used as a powerful flavoring agent in virtually every kitchen.",
          "inStock": true,
          "createdOn": "3/11/2024 2:01:18 AM",
          "images": [
            {
              "id": "products/rh6lmkyvucwt9fajp4og",
              "imageType": "PRODUCTIMAGE",
              "imagePath": "https://res.cloudinary.com/dyeqnpz4g/image/upload/v1710102680/products/rh6lmkyvucwt9fajp4og.webp",
              "productId": "614651df-7fa5-418b-95f4-f9b9a53c3184"
            }
          ]
        },
        {
          "id": "7445289d-22ac-4727-b730-7f71822a91ce",
          "productName": "Brinjal",
          "categoryId": "a3572cfb-5de3-4fc4-a0aa-68b806b636e5",
          "quantity": 50,
          "priceUnit": null,
          "price": 40,
          "offerPrice": 35,
          "description": "Brinjal has smooth and easy blackish-crimson pores and skin with smooth pulpy flesh. When cooked, it will become soft and develop a wealthy and complicated flavour. They may be cooked in numerous methods including baking, barbecuing, and frying.",
          "inStock": true,
          "createdOn": "3/11/2024 2:02:19 AM",
          "images": [
            {
              "id": "products/zljrhaxz2l0xb0ch8a4a",
              "imageType": "PRODUCTIMAGE",
              "imagePath": "https://res.cloudinary.com/dyeqnpz4g/image/upload/v1710102741/products/zljrhaxz2l0xb0ch8a4a.webp",
              "productId": "7445289d-22ac-4727-b730-7f71822a91ce"
            }
          ]
        },
        {
          "id": "b549f549-6b55-4998-bf51-1d96053bb995",
          "productName": "Ginger (Adrak)",
          "categoryId": "a3572cfb-5de3-4fc4-a0aa-68b806b636e5",
          "quantity": 50,
          "priceUnit": null,
          "price": 30,
          "offerPrice": 20,
          "description": "Ginger is slightly hot and sweet, with a pungent and spicy aroma. Ginger is used fresh, dried, powdered, or as an oil or juice, and is usually additional to processed foods and cosmetics.",
          "inStock": true,
          "createdOn": "3/11/2024 1:57:00 AM",
          "images": [
            {
              "id": "products/qp9ievq7bywxwemdminz",
              "imageType": "PRODUCTIMAGE",
              "imagePath": "https://res.cloudinary.com/dyeqnpz4g/image/upload/v1710102423/products/qp9ievq7bywxwemdminz.webp",
              "productId": "b549f549-6b55-4998-bf51-1d96053bb995"
            }
          ]
        },
        {
          "id": "f7ea065c-575e-4ddc-bfe0-8311e682e7b3",
          "productName": "Onion",
          "categoryId": "a3572cfb-5de3-4fc4-a0aa-68b806b636e5",
          "quantity": 50,
          "priceUnit": null,
          "price": 30,
          "offerPrice": 25,
          "description": "Onion is a staple in India and is generally chopped and used as an element in numerous hearty heat dishes. They are flexible and may be baked, boiled, braised, grilled, fried, roasted, sautéed, or eaten raw in salads.",
          "inStock": true,
          "createdOn": "3/11/2024 1:59:57 AM",
          "images": [
            {
              "id": "products/wywz3iz20pxeewvyzcop",
              "imageType": "PRODUCTIMAGE",
              "imagePath": "https://res.cloudinary.com/dyeqnpz4g/image/upload/v1710102600/products/wywz3iz20pxeewvyzcop.webp",
              "productId": "f7ea065c-575e-4ddc-bfe0-8311e682e7b3"
            }
          ]
        }
      ]);


    return (
        <>
            <section className="py-4 osahan-main-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="recommend-slider mb-3">
                                <div className="osahan-slider-item">
                                    <img src="img/recommend/r1.jpg" className="img-fluid mx-auto shadow-sm rounded" alt="Responsive image" />
                                </div>
                            </div>
                            <div className="pd-f d-flex align-items-center mb-3">
                                <a href="cart.html" className="btn btn-warning p-3 rounded btn-block d-flex align-items-center justify-content-center mr-3 btn-lg"><i className="icofont-plus m-0 mr-2"></i> ADD TO CART</a>
                                <a href="cart.html" className="btn btn-success p-3 rounded btn-block d-flex align-items-center justify-content-center btn-lg m-0"><i className="icofont-cart m-0 mr-2"></i> BUY NOW</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-4 bg-white rounded shadow-sm">
                                <div className="pt-0">
                                    <h2 className="font-weight-bold">Valencia Orange - Imported</h2>
                                    <p className="font-weight-light text-dark m-0 d-flex align-items-center">
                                        Product MRP : <b className="h6 text-dark m-0">$263.00</b>
                                        <span className="badge badge-danger ml-2">50% OFF</span>
                                    </p>
                                    <a href="review.html">
                                        <div className="rating-wrap d-flex align-items-center mt-2">
                                            <ul className="rating-stars list-unstyled">
                                                <li>
                                                    <i className="icofont-star text-warning"></i>
                                                    <i className="icofont-star text-warning"></i>
                                                    <i className="icofont-star text-warning"></i>
                                                    <i className="icofont-star text-warning"></i>
                                                    <i className="icofont-star"></i>
                                                </li>
                                            </ul>
                                            <p className="label-rating text-muted ml-2 small"> (245 Reviews)</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="pt-2">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="font-weight-bold m-0">Delivery</p>
                                            <p className="text-muted m-0">Free</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p className="font-weight-bold m-0">Available in:</p>
                                            <p className="text-muted m-0">1 kg, 2 kg, 5 kg</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="pt-3 bg-white">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-group osahan-radio btn-group-toggle" data-toggle="buttons">
                                                <label className="btn btn-secondary active">
                                                    <input type="radio" name="options" id="option1" defaultChecked /> 4 pcs
                                                </label>
                                                <label className="btn btn-secondary">
                                                    <input type="radio" name="options" id="option2" /> 6 pcs
                                                </label>
                                                <label className="btn btn-secondary">
                                                    <input type="radio" name="options" id="option3" /> 1 kg
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <div className="input-group mb-3 border rounded shadow-sm overflow-hidden bg-white">
                                            <div className="input-group-prepend">
                                                <button className="border-0 btn btn-outline-secondary text-success bg-white"><i className="icofont-search"></i></button>
                                            </div>
                                            <input type="text" className="shadow-none border-0 form-control form-control-lg pl-0" placeholder="Type your city (e.g Chennai, Pune)" aria-label="" aria-describedby="basic-addon1" />
                                        </div>
                                        <p className="font-weight-bold mb-2">Product Details</p>
                                        <p className="text-muted small mb-0">High quality Fresh Orange fruit exporters from South Korea for sale. All citrus trees belong to the single genus Citrus and remain almost entirely interfertile. This includes grapefruits, lemons, limes, oranges, and various other types and hybrids. The fruit of any citrus tree is considered a hesperidium, a kind of modified berry; it is covered by a rind wall.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className="mt-3 mb-3">Maybe You Like this.</h5>
                    <div className="row">
                    {products.map(product => (
                                        <ProductCard product={product} key={product.id}/>
                                    ))}
                    </div>
                </div>
            </section>
        </>
    )
}
