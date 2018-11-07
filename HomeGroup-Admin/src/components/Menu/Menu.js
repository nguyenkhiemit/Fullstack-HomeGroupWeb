import React, {Component} from 'react';
import './Menu.css'
import {Link, Route} from "react-router-dom";

const menus = [
    {
        name: 'Dự án tiêu biểu',
        to: '/main',
        exact: true
    },
    {
        name: 'Thiết kế nội thất',
        to: '/design',
        exact: true
    },
    {
        name: 'Thi công nội thất',
        to: '/construction',
        exact: true
    },
    {
        name: 'Thiết kế mẫu',
        to: '/sample-design',
        exact: true
    },
    {
        name: 'Liên hệ',
        to: '/contact',
        exact: true
    }
];

const MenuLink = ({name, to, exact}) => {
    return (
        <Route
            path={to}
            exact={exact}
            children={({match}) => {
                let active = match ? 'active' : '';
                return (
                    <li className={`nav-item nav-link ${active}`}>
                        <Link to={to} className="nav-link">
                            {name}
                        </Link>
                    </li>
                )
            }}
        />
    );
};

class Menu extends Component {
    render() {
        return (
            <div className="side-menu">
                <ul>
                    {this.showMenu(menus)}
                </ul>
            </div>
        );
    }

    showMenu = (menus) => {
        let result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        name={menu.name}
                        to={menu.to}
                        exact={menu.exact}
                    />
                );
            })
        }
        return result;
    }
}

export default Menu;
