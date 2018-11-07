import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {authRoutes} from "../../routes";

class Authen extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        {this.showContentMenus(authRoutes)}
                    </div>
                </Router>
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

export default Authen;
