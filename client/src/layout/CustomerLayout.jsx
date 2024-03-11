import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Theme from '../layout/Theme'
import { Link, Outlet } from 'react-router-dom'

export default function CustomerLayout() {
    return (
        <>
            <Header />
            <section className="py-4 osahan-main-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="osahan-home-page">
                                <div className="osahan-body">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Theme />
        </>
    )
}
