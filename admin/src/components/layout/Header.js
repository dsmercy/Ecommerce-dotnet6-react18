import React from 'react'
import { useState } from 'react'
import { Slider } from "react-burgers";
import avatar from '../../assets/utils/images/avatars/1.jpg'
import {
    DropdownToggle, DropdownMenu,
    Nav, Button, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown
} from 'reactstrap';

import {
    toast,
    Bounce
} from 'react-toastify';


import {
    faCalendarAlt,
    faAngleDown

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import 'react-toastify/dist/ReactToastify.css';

export default function Header({ enableClosedSidebar, setEnableClosedSidebar }) {



    const toggleEnableClosedSidebar = () => {
        setEnableClosedSidebar(!enableClosedSidebar);
    }

    return (
        <>
            <div className="app-header bg-strong-bliss header-text-light header-shadow">
                <div className="app-header__logo">
                    <div className="logo-src" />
                    <div className="header__pane ms-auto">
                        <div onClick={toggleEnableClosedSidebar}>
                            <Slider
                                active={enableClosedSidebar}
                                type="elastic"
                            // onClick={() => this.setState({active: !this.state.active})}
                            />
                        </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
                </div>
                <div className="app-header__content">
                    <div className="app-header-left">
                        <div className="search-wrapper">
                            <div className="input-holder">
                                <input type="text" className="search-input" placeholder="Type to search" />
                                <button className="search-icon"><span></span></button>
                            </div>
                            <button className="btn-close"></button>
                        </div>
                    </div>
                    <div className="app-header-right">
                    <div className="header-btn-lg pe-0 me-5">
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle color="link" className="p-0">
                                        <img width={42} className="rounded-circle" src={avatar} alt=""/>
                                        <FontAwesomeIcon className="ms-2 opacity-8" icon={faAngleDown}/>
                                    </DropdownToggle>
                                    <DropdownMenu end className="rm-pointers dropdown-menu-lg">
                                        <Nav vertical>
                                            <NavItem className="nav-item-header">
                                                Activity
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#">
                                                    Chat
                                                    <div className="ms-auto badge bg-pill bg-info">8</div>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#">Recover Password</NavLink>
                                            </NavItem>
                                            <NavItem className="nav-item-header">
                                                My Account
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#">
                                                    Settings
                                                    <div className="ms-auto badge bg-success">New</div>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#">
                                                    Messages
                                                    <div className="ms-auto badge bg-warning">512</div>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#">
                                                    Logs
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </div>
                            <div className="widget-content-left  ms-3 header-user-info">
                                <div className="widget-heading">
                                    Alina Mclourd
                                </div>
                                <div className="widget-subheading">
                                    VP People Manager
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </>
    )
}
