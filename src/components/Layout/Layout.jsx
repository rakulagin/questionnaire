import React from "react";
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {

    const navigate = useNavigate()

    const toMain = () => {
        navigate("/")
    }

    return (
        <div className="background">
            <div className="to-main" onClick={ toMain }></div>
            <Outlet />
        </div>
    )
}

export default Layout