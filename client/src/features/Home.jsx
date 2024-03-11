import React from 'react'
import ProductSlide from '../components/ProductSlide'
import Promo from '../components/Promo'
import Recommend from './Product/Recommend'
import Trending from '../components/Trending'

export default function Home() {
    return (
        <>
            <ProductSlide />
            <Promo />
            <Trending />
            <Recommend />
        </>
    )
}
