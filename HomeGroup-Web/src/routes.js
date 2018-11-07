import React from 'react'
import HomePage from "./pages/HomePage/HomePage";
import IntroductionPage from "./pages/IntroductionPage/IntroductionPage";
import FactoryPage from "./pages/FactoryPage/FactoryPage";
import DesignPage from "./pages/DesignPage/DesignPage";
import SampleDesignPage from "./pages/SampleDesignPage/SampleDesignPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ConstructionPage from "./pages/ConstructionPage/ConstructionPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/introduction',
        exact: true,
        main: () => <IntroductionPage/>
    },
    {
        path: '/factory',
        exact: true,
        main: () => <FactoryPage/>
    },
    {
        path: '/design',
        exact: true,
        main: () => <DesignPage/>
    },
    {
        path: '/construction',
        exact: true,
        main: () => <ConstructionPage/>
    },
    {
        path: '/sample-design',
        exact: true,
        main: () => <SampleDesignPage/>
    },
    {
        path: '/contact',
        exact: true,
        main: () => <ContactPage/>
    },
    {
        path: '/product-detail',
        exact: true,
        main: ({history}) => <ProductDetailPage history={history}/>
    }
];

export default routes;