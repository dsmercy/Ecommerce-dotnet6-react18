import React, { useEffect, useState } from 'react'
import cx from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export default function NavComponent({ navItem }) {

    const [path, setPath] = useState('');
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
   

    const expandNav=(e)=>{
        if (e.target.nodeName === "I") {
            if (!e.target.parentElement.nextSibling.classList.contains("visible")) {
                e.target.parentElement.nextSibling.classList.add("visible");
            } else {
                e.target.parentElement.nextSibling.classList.remove("visible");
            }
        } else {
            if (!e.target.nextSibling.classList.contains("visible")) {
                e.target.nextSibling.classList.add("visible");
            } else {
                e.target.nextSibling.classList.remove("visible");
            }
        }   
    }

    return (
        <>
            <div className="metismenu vertical-nav-menu">
                <ul className="metismenu-container">

                    {navItem.map(function (nav, index) {
                        return nav.content != undefined ? (
                            <li className="metismenu-item" key={index}>
                                <a className="metismenu-link" href="#" onClick={(e) => expandNav(e)}><i className={cx("metismenu-icon", nav.icon)} />{nav.label}<i className="metismenu-state-icon pe-7s-angle-down caret-left" /></a>
                                <ul className={cx("metismenu-container")}>
                                    {nav.content.map(function (content, index) {
                                        return <li className="metismenu-item" key={index}><Link to={content.to} className={`metismenu-link ${splitLocation[1] === content.to ? 'active' : ''}`}><i className="metismenu-icon" />{content.label}</Link></li>
                                    })}
                                </ul>
                            </li>
                        ) : (
                            <li className="metismenu-item" key={index}>
                                <Link className={`metismenu-link ${splitLocation[1] === nav.to ? 'active' : ''}`} to={nav.to}><i className={cx("metismenu-icon", nav.icon)} />{nav.label}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
