import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

// import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

// import PageTitle404 from '../blocks/page-title/PageTitle404';
// import BackToHome from '../components/button/BackToHome';
// import SearchForm from '../components/form/SearchForm';

const page404 = () => {
    document.body.classList.add( 'error404' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Junwon Lee</title>
                {/* <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌊</text></svg>"></link> */}
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="google-site-verification" content="G6-aAhPgTXHhI-3wYIV_mFVFuOUsr_zI8iwHPP_Gv4U" />
            </MetaTags>

            {/* <Loading /> */}

            <Header />

            <main id="main" className="site-main bg-half-ring-up">
                {/* <PageTitle404 /> */}

                <div id="page-content" className="block">
                    <div className="wrapper">
                        <p className="spacer p-top-lg w-50 m-0">404 Error...</p>

                        <div className="spacer p-top-xs d-xl-flex d-lg-flex d-md-flex justify-content-between block m-top-extrasmall">
                            <div className="align-self-center w-50">
                                {/* <SearchForm /> */}
                            </div>

                            {/* <BackToHome /> */}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default page404;
