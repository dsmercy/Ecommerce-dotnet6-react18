import React, { useState } from 'react'
import { ChartsNav, ComponentsNav, FormsNav, MainNav, ProductsMaster, WidgetsNav } from '../NavItems'
import NavComponent from './NavComponent';

export default function Sidebar() {

    return (
        <div component="div" className="app-sidebar bg-royal sidebar-text-light sidebar-shadow appear-done enter-done">
            <div className="app-header__logo">
                <div className="logo-src" />
                <div className="header__pane ms-auto">
                    <div>
                        <button className="jsx-2200192874 BurgerSlider Burger">
                            <div className="jsx-2200192874 BurgerBox">
                                <div className="jsx-2200192874 BurgerInner" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="app-header__mobile-menu">
                <div>
                    <button className="jsx-2200192874 BurgerSlider Burger">
                        <div className="jsx-2200192874 BurgerBox">
                            <div className="jsx-2200192874 BurgerInner" />
                        </div>
                    </button>
                </div>
            </div>
            <div className="app-header__menu">
                <span>
                    <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm">
                        <div className="btn-icon-wrapper">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-vertical" className="svg-inline--fa fa-ellipsis-vertical " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <path fill="currentColor" d="M56 472a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-160a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM0 96a56 56 0 1 1 112 0A56 56 0 1 1 0 96z" />
                            </svg>
                        </div>
                    </button>
                </span>
            </div>
            <div className="scrollbar-container ps">
                <div className="app-sidebar__inner">
                    <h5 className="app-sidebar__heading">Dashboards</h5>
                    <NavComponent navItem={MainNav} />
                    <h5 className="app-sidebar__heading">Manage</h5>
                    <NavComponent navItem={ProductsMaster} />
                    <h5 className="app-sidebar__heading">UI Components</h5>
                    <NavComponent navItem={ComponentsNav} />
                    <h5 className="app-sidebar__heading">Widgets</h5>
                    <NavComponent navItem={WidgetsNav} />
                    <h5 className="app-sidebar__heading">Forms</h5>
                    <NavComponent navItem={FormsNav} />
                    <h5 className="app-sidebar__heading">Charts</h5>
                    <NavComponent navItem={ChartsNav} />
                </div>
                <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}>
                    <div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} />
                </div>
                <div className="ps__rail-y" style={{ top: '0px', right: '0px' }}>
                    <div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} />
                </div>
            </div>
            <div className="app-sidebar-bg opacity-06" style={{ backgroundImage: 'url("/architectui-react-pro/static/media/city1.fadfec7c097747ec76eb.jpg")' }} />
        </div>
    )
}
