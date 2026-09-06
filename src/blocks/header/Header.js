import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/img/logo_jnwn.png';

const Header = () => {
    const { pathname } = useLocation();
    const menuItems = [
        { label: 'About', path: '/about', className: 'menu-item-about' },
        { label: 'Publication', path: '/publications', className: 'menu-item-publication' },
        { label: 'Blog', path: '/blog', className: 'menu-item-blog' }
    ];

    return (
        <header id="header" className="site-header">
            <div className="wrapper d-flex justify-content-between align-items-center site-title header-row">
                <Link
                    title="Home"
                    className="header-logo"
                    to="/">
                    <img src={ Logo } alt="jnwn"/>
                </Link>
                <nav className="menu-third">
                    <ul className="clearfix list-unstyled">
                        { menuItems.map( item => (
                            <li
                                key={ item.path }
                                className={ `menu-item ${ item.className }` + ( pathname === item.path ? " current-menu-item" : "" ) }
                            >
                                <h5><b>
                                    <Link
                                        title={ item.label }
                                        className="h1 transform-scale-h border-0 p-0"
                                        aria-current={ pathname === item.path ? 'page' : undefined }
                                        to={ item.path }
                                    >
                                        { item.label }
                                    </Link>
                                </b></h5>
                            </li>
                        ) ) }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
