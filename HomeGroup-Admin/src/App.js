import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Authen from "./pages/AuthenPage/Authen";

class App extends Component {
    render() {
        return (
            <div>
                <Authen/>
            </div>
        );
    }

    showContentMenus = (routes) => {
        let result = null;
        if(routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            });
        }
        return <Switch>{result}</Switch>
    }
}

export default App;
