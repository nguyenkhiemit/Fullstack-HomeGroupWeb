import React, {Component} from 'react';
import Navbar from "../components/Navbar/Navbar";
import Menu from "../components/Menu/Menu";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {routes} from "../routes";

class MainPage extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Navbar/>
                        <div className="row">
                            <div className="col-md-2">
                                <Menu/>
                            </div>
                            <div className="col-md-10">
                                {this.showContentMenus(routes)}
                            </div>
                        </div>
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

export default MainPage;
