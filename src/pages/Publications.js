import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import PublicationTable from '../blocks/publicationTable/PublicationTable';

const Publications = () => {
    document.body.classList.add( 'publications' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-color-custom' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Publications | Junwon Lee</title>
                <link href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css" rel="stylesheet"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Publications by Junwon Lee" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Header/>

            <main id="main" className="site-main">
                <PublicationTable description="Selected publications can be found on the home page."/>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Publications;
