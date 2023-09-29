import Menu from "pages/menu"
import Home from "./pages/home"
import React from 'react'
import { RouteProps } from "react-router-dom"
import Services from "pages/services"
import Blog from "pages/blog"
import About from "pages/about"
import Shop from "pages/shop"
import Product from "pages/product-single"
import Cart from "pages/cart"
import Checkout from "pages/checkout"
import Contact from "pages/contact"

export const PageRoutes: RouteProps[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/menu",
        element: <Menu />,
    },
    {
        path: "/services",
        element: <Services />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/shop",
        element: <Shop />,
    },
    {
        path: "/product-single/:id",
        element: <Product />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
]
