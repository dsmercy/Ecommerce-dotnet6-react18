import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './sidebar/Sidebar'
import cx from 'classnames';
import { Switch, Route, Redirect, Outlet } from "react-router-dom";
import Dashboard from '../../features/Dashboard';
import Validation from '../form/Validations';

export default function Layout({ children }) {
    const [enableClosedSidebar, setEnableClosedSidebar] = useState(false);
    return (
        <>
            <div className={cx("app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header", { 'closed-sidebar': enableClosedSidebar })}>
                <Header enableClosedSidebar={enableClosedSidebar} setEnableClosedSidebar={setEnableClosedSidebar} />

                <div className="app-main">
                    <Sidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
