import { AuthRouteType } from '@/config/types'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function CheckAuth({ isAuthenticated, user, children }: AuthRouteType) {

    const location = useLocation()

    if (
        !isAuthenticated &&
        location.pathname == '/'
    ) {
        return <Navigate to="/home" />
    }
   
    if (
        !isAuthenticated &&
        !(location.pathname.includes("/login") ||
            location.pathname.includes("/register"))
    ) {
       // return <Navigate to="/auth/login" />
    }

    if (
        isAuthenticated &&
        (location.pathname.includes("/login") ||
            location.pathname.includes("/register"))
    ) {

        if (user?.role === "admin") {
            return <Navigate to="/admin/dashboard" />
        }
        else {
            return <Navigate to="/home" />
        }
    }


    if (
        isAuthenticated &&
        user?.role !== "admin" &&
        location.pathname.includes("/admin")
    ) {
        return <Navigate to="/home" />
    }

    if (
        isAuthenticated &&
        user?.role === "admin" &&
        location.pathname.includes("/shop")
    ) {
        return <Navigate to="/admin/dashboard" />
    }


    return children
}

export default CheckAuth