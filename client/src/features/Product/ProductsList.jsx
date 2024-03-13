import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Filter from "../../components/Filter";
import services from "../../api/services";
import useProductsStore from "../../store/productsStore";


export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const productsList = [
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
      ];


    const addtoCart = (product) => {
        // setLoading(true);
        setCartItems([...cartItems, product.id]);
        localStorage.setItem('cart', cartItems);
        // setTimeout(function () { setLoading(false) }, 2000);
    }



    // set default theme
    useEffect(() => {
        // services.Product.getAll().then(result => {
        //     setProducts(result.data);
        // });
        useProductsStore.addProducts(productsList);
          setProducts(useProductsStore.getState().products);
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

                                    {products.map((product,index) => (
                                        <ProductCard product={product} key={index} addtoCart={addtoCart} />
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
