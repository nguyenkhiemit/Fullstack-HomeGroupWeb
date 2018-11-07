import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import './Menu.css';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Giới Thiệu',
        to: '/introduction',
        exact: true
    },
    {
        name: 'Xưởng Sản Xuất',
        to: '/factory',
        exact: true
    },
    {
        name: 'Thiết Kế Nội Thất',
        to: '/design',
        exact: true
    },
    {
        name: 'Thi Công Nội Thất',
        to: '/construction',
        exact: true
    },
    {
        name: 'Thiết Kế Mẫu',
        to: '/sample-design',
        exact: true
    },
    {
        name: 'Liên Hệ',
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
            <div className="sticky">
                <div className="menu center">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <ul className="navbar-nav">
                            {this.showMenu(menus)}
                        </ul>
                    </nav>
                </div>
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