import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo_jnwn.png'

const Header = () => {
    const current = window.location.href;
    const baseline = "https://jnwnlee.github.io/";
    const splitArr = current.split(baseline);

    const [isHomeHover, setIsHomeHover] = useState(false);
    const [isAboutHover, setIsAboutHover] = useState(false);
    const [isBlogHover, setIsBlogHover] = useState(false);

    const handleHomeMouseEnter = () => {setIsHomeHover(true);};
    const handleHomeMouseLeave = () => {setIsHomeHover(false);};
    const handleAboutMouseEnter = () => {setIsAboutHover(true);};
    const handleAboutMouseLeave = () => {setIsAboutHover(false);};
    const handleBlogMouseEnter = () => {setIsBlogHover(true);};
    const handleBlogMouseLeave = () => {setIsBlogHover(false);};

    return (
        <header id="header" className="site-header">
            <div className='wrapper d-flex justify-content-start site-title'>
                <a
                    title="Home"
                    className=''
                    href="#/"
                    style={{width: 14+'rem'}}>
                    <img src={Logo} alt='jnwn'/>
                </a>
            </div>
            <div className="wrapper d-flex justify-content-start">
                {/*
                <div className="align-self-center">
                    <p>  </p> 
                </div>
                */}

                <nav className="menu-third">
                    <ul className="clearfix list-unstyled">
                        <li className={ "menu-item" + ( splitArr[1] === '#/' ? " current-menu-item" : "" ) }>
                            <h5> <b>
                                {/* <a 
                                    title="Home"
                                    className="h1 transform-scale-h border-0 p-0"
                                    style={{color: isHomeHover ? '#1D9EFF' : '#2B2B2B'}}
                                    onMouseEnter={handleHomeMouseEnter}
                                    onMouseLeave={handleHomeMouseLeave}
                                    href="#/">Home</a> */}
                                <Link
                                    title="Home"
                                    className="h1 transform-scale-h border-0 p-0"
                                    style={{color: isHomeHover ? '#1D9EFF' : '#2B2B2B'}}
                                    onMouseEnter={handleHomeMouseEnter}
                                    onMouseLeave={handleHomeMouseLeave}
                                    to="/">Home</Link>
                            </b> </h5>
                        </li>
                        <li className={ "menu-item" + ( splitArr[1] === '#/about' ? " current-menu-item" : "" ) }>
                            <h5> <b>
                                {/* <a 
                                    title="About" 
                                    className="h1 transform-scale-h border-0 p-0"
                                    style={{color: isAboutHover ? '#FF5A57' : '#2B2B2B'}}
                                    onMouseEnter={handleAboutMouseEnter}
                                    onMouseLeave={handleAboutMouseLeave}
                                    href="#/about">About</a> */}
                                <Link 
                                    title="About" 
                                    className="h1 transform-scale-h border-0 p-0"
                                    style={{color: isAboutHover ? '#FF5A57' : '#2B2B2B'}}
                                    onMouseEnter={handleAboutMouseEnter}
                                    onMouseLeave={handleAboutMouseLeave}
                                    to="/about">About</Link>
                            </b> </h5>
                        </li>
                        <li className={ "menu-item" + ( splitArr[1] === '#/blog' ? " current-menu-item" : "" ) }>
                            <h5> <b>
                                {/* <a 
                                    title="Blog" 
                                    className="h1 transform-scale-h border-0 p-0"
                                    style={{color: isBlogHover ? '#EFF20D' : '#2B2B2B'}}
                                    onMouseEnter={handleBlogMouseEnter}
                                    onMouseLeave={handleBlogMouseLeave}
                                    href="#/blog">Blog</a> */}
                                <Link 
                                    title="Blog" 
                                    className="h1 transform-scale-h border-0 p-0"
                                    style={{color: isBlogHover ? '#EFF20D' : '#2B2B2B'}}
                                    onMouseEnter={handleBlogMouseEnter}
                                    onMouseLeave={handleBlogMouseLeave}
                                    to="/blog">Blog</Link>
                            </b> </h5>
                        </li>
                        {/* <li className={ "menu-item" + ( splitArr[1] === '#/thesis' ? " current-menu-item" : "" ) }>
                            <a 
                                title="thesis" 
                                className="btn btn-link transform-scale-h border-0 p-0"
                                href="#/thesis">Thesis</a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
