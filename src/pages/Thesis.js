import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

const Thesis = () => {
    document.body.classList.add( 'thesis' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-color-custom' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>SeungHeon Doh | MIR, ML/DL Researcher</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎹</text></svg>"></link>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>
            <Header/>

            <main id="main" className="site-main">
                <div className="wrapper">
                    <p>Comming Soon</p>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Thesis;
