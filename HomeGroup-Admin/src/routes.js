import React from 'react'
import Construction from "./pages/ConstructionPage/Construction";
import Design from "./pages/DesignPage/Design";
import SampleDesign from "./pages/SampleDesignPage/SampleDesign";
import Contact from "./pages/ContactPage/Contact";
import CreateProduct from "./pages/CreateProductPage/CreateProduct";
import Login from "./pages/AuthenPage/Login";
import Register from "./pages/AuthenPage/Register";
import MainPage from "./pages/MainPage";
import MainProduct from "./pages/MainProjectPage/MainProduct";

export const authRoutes = [
    {
        path: '/',
        exact: true,
        main: () => <Login/>
    },
    {
        path: '/register',
        exact: true,
        main: () => <Register/>
    },
    {
        path: '/main',
        exact: true,
        main: () => <MainPage/>
    },
];

export const routes = [
    {
        path: '/main',
        exact: true,
        main: () => <MainProduct/>
    },
    {
        path: '/design',
        exact: true,
        main: () => <Design/>
    },
    {
        path: '/construction',
        exact: true,
        main: () => <Construction/>
    },
    {
        path: '/sample-design',
        exact: true,
        main: () => <SampleDesign/>
    },
    {
        path: '/contact',
        exact: true,
        main: () => <Contact/>
    },
    {
        path: '/create-product',
        exact: true,
        main: () => <CreateProduct/>
    }
];